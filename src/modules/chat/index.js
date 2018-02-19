import firebase from 'firebase';
import { inspect } from 'util';


export const SUBMIT_MESSAGE = '@@chat/SUBMIT_MESSAGE';
export const FETCH_MESSAGES = '@@chat/FETCH_MESSAGES';

export const submitMessage = (msg) =>({
  type: SUBMIT_MESSAGE,
  payload: msg
});

export const fetchMessages = (idRoom) => ({
  type: FETCH_MESSAGES,
  payload: fetchFromFirebase(idRoom)
});

export const sendMessage = (message, idRoom) => {
  const database = firebase.database()
  const newChatRef = database.ref('messages/' + idRoom).push()
  return newChatRef.set(message)
}

const initialState = {
  roomName: '',
  messages: []
};

const fetchFromFirebase = (idRoom) => {
    return firebase.database().ref(`/messages/${idRoom}`).on('value', (snapshot) => {
      console.log(`snapshot.val : ${inspect(snapshot.val())}`);
      return snapshot.val();
    })
}

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload]
      }
    default: return state;
  }
}
