import * as firebase from 'firebase'

const FETCH_ROOMS = '@@rooms/FETCH_ROOMS'
const UPDATE_LIST = '@@rooms/UPDATE_LIST'
const CREATE_ROOM = '@@rooms/CREATE_ROOM'

export const fetchRooms = (data) =>
  (dispatch) => {
    dispatch({ type: FETCH_ROOMS })

    return firebase.database().ref('/rooms').once('value')
    .then(snapshot => {
      let rooms = []

      snapshot.forEach(childSnapshot => {
        rooms.push({
          'id': childSnapshot.key,
          'name': childSnapshot.val().name,
          'description': childSnapshot.val().description
        })
      })
      return dispatch(updateList(rooms))
    })
    .catch(error => console.error(error))
  }

//ACTION: update list values
export const updateList = (values) => ({
  type: UPDATE_LIST,
  payload: values
})

//ACTION: create new room
export const createRoom = (newRoom) => ({
  type: CREATE_ROOM,
  payload: newRoom
})

const initialState = {
  listRooms: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return {
        ...state,
        ...initialState
      }
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
