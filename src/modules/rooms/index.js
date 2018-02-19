import * as firebase from 'firebase'

const FETCH_ROOMS = '@@rooms/FETCH_ROOMS'
const UPDATE_LIST = '@@rooms/UPDATE_LIST'

export const ROOMS_PATH = '/rooms'

//ACTION: fetch rooms list
export const fetchRooms = (data) =>
  (dispatch) => {
    dispatch({ type: FETCH_ROOMS })

    firebase.database().ref(ROOMS_PATH).on('value', (snapshot) => {
      let rooms = []

      snapshot.forEach(childSnapshot => {
        rooms.push({
          'id': childSnapshot.key,
          'name': childSnapshot.val().name,
          'description': childSnapshot.val().description,
          'users': childSnapshot.val().users
        })
      })
      return dispatch(updateList(rooms))
    })
  }

//ACTION: update list values
export const updateList = (values) => ({
  type: UPDATE_LIST,
  payload: values
})

//ACTION: create new room
export const createRoom = (newRoom) =>
  (dispatch) => {
    return firebase.database().ref(ROOMS_PATH + '/' + newRoom.id).set({
      'name': newRoom.name,
      'description': newRoom.description,
      'users': newRoom.users
    })
    .catch(error => console.error("Error occured : " + error))
  }


//INITIAL STATE
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
    default:
      return state
  }
}

export default reducer
