import firebase from 'firebase'

export const SUBMIT_MESSAGE = '@@chat/SUBMIT_MESSAGE';
export const FETCH_MESSAGE = '@@chat/FETCH_MESSAGE';

export const submitMessage = (msg) =>({
  type: SUBMIT_MESSAGE,
  payload: msg
});

export const fetchMessage = (roomName) => ({
  type: FETCH_MESSAGE,
  payload: fetchFromFirebase(roomId)
});

const initialState = {
  roomName: '',
  messages: []
};

const fetchFromFirebase = async (roomName) => {
  try {
    const snapshot = await firebase.database().ref(`/messages/${roomId}`).on('value');
    return snapshot.val();
  
  } catch(err) {
    console.error(err);
  }

}

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload] 
      }
    case FETCH_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default: return state;
  }
}
