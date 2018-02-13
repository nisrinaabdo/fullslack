const UPDATE_LIST = '@@roomsList/UPDATE_LIST'

//ACTION: update list values
export const updateList = (values) => ({
  type: UPDATE_LIST,
  payload: values
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
    default:
      return state
  }
}

export default reducer
