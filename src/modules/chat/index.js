import firebase from 'firebase';
import { inspect } from 'util';


export const SUBMIT_MESSAGE = '@@chat/SUBMIT_MESSAGE';
export const FETCH_MESSAGES = '@@chat/FETCH_MESSAGES';

export const submitMessage = (msg) =>({
  type: SUBMIT_MESSAGE,
  payload: msg
});


const fetchMessage = (messages) => ({
  type: FETCH_MESSAGES,
  payload: messages
})


export const sendMessage = (message, idRoom) => {
  const database = firebase.database()
  const newChatRef = database.ref('messages/' + idRoom).push()
  return newChatRef.set(message)
}

const initialState = {
  roomName: '',
  messages: []
};

export const fetchFromFirebase = (idRoom) => (dispatch) => {
  return firebase.database().ref(`/messages/${idRoom}`).on('value', (snapshot) => {
    console.log(`snapshot.val: ${inspect(snapshot.val())}`);
    if(snapshot.val()) {
      dispatch(fetchMessage(Object.values(snapshot.val())))
    }
  })
}

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        messages: [...action.payload]
      }
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: [...action.payload]
      }
    default: return state;
  }
}
