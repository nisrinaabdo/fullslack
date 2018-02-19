import * as firebase from 'firebase'

export const USERS_ADD = '@@users/ADD'
export const USERS_ADD_SUCCESS = '@@users/ADD_SUCCESS'
export const USERS_ADD_FAILURE = '@@users/ADD_FAILURE'
export const USERS_FETCH = '@@users/FETCH'
export const USERS_FETCH_SUCCESS = '@@users/FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = '@@users/FETCH_FAILURE'
export const USERS_LOAD = '@@users/LOAD'
export const USERS_LOGOUT = '@@users/LOGOUT'

const addUserSuccess = (user) => ({
    type: USERS_ADD,
    user,
})
const addUserFailure = (error) => ({
    type: USERS_ADD,
    error,
})

export const addUser = (user) => 
    (dispatch) => {
        dispatch({ type: USERS_ADD })
        firebase.database().ref('/users/' + user.uid)
            .set({
                email: user.email,
            })
          .then(user => dispatch(addUserSuccess(user)))
          .catch(error => dispatch(addUserFailure(error)))
    }

const fetchUsersSuccess = (list) => ({
    type: USERS_FETCH_SUCCESS,
    list,
})

const fetchUsersFailure = (error) => ({
    type: USERS_FETCH_FAILURE,
    error,
    isLoading: false,
})

export const fetchUsers = (users) => 
    (dispatch) => {
        dispatch({ type: USERS_FETCH })
        const users = {}
        const request = firebase.database().ref('/users')
        return request.once('value')
            .then((snapshot) => {
                snapshot.forEach((chilSnapshot) => users[chilSnapshot.key] = chilSnapshot.val())
                return dispatch(fetchUsersSuccess(users))
            })
            .catch(error => dispatch(fetchUsersFailure(error)))
    }

const loadUser = user => ({
    type: USERS_LOAD,
    user,
})

const logoutUser = () => ({
    type: USERS_LOGOUT,
})

export const changeUserAuthState = (user) =>
    (dispatch) => {
        if (user) {
            dispatch(fetchUsers())
                .then((data) => {
                    if (data[user.uid] === undefined) {
                        dispatch(addUser(user))
                    }
                    dispatch(loadUser(user))
                })
        } else {
            dispatch(logoutUser())
        }
    }

const initialState = {
    list: {},
    isLoading: false,
    error: false,
}

export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case USERS_ADD:
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.user.uid]: action.user
                },
            }
        case USERS_FETCH:
            return {
                ...state,
                isLoading: true,
                list: {},
        }
        case USERS_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.list,
            }
        
        case USERS_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                list: {},
                error: action.error,
            }
        default:
            return state
    }
}
