export const SUBMIT_MESSAGE = '@@chat/SUBMIT_MESSAGE';
export const submitMessage = (msg) =>({
  type: SUBMIT_MESSAGE,
  payload: msg
});

const initialState = {
  roomName: '',
  messages: []
}

export const reducer = (state = initialState , action) => {
  switch(action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload] 
      }
    default: return state;
  }
}
<<<<<<< HEAD
=======

>>>>>>> 2d9d5110c083e4d01bf28c89c8e4f3c9dff312ee
