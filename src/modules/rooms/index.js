const UPDATE_LIST = '@@rooms/UPDATE_LIST'
const CREATE_ROOM = '@@rooms/CREATE_ROOM'

//ACTION: update list values
export const updateList = (values) => ({
  type: UPDATE_LIST,
  payload: values
})

//ACTION: create new room
export const createRoom = (name) => ({
  type: CREATE_ROOM,
  payload: name
})

const initialState = {
  listRooms: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        listRooms: action.payload
      }
    case CREATE_ROOM:
      return {
        ...state,
        listRooms: [...state.listRooms, action.payload]
      }
    default:
      return state
  }
}

export default reducer
