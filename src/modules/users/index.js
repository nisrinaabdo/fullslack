import * as firebase from 'firebase'
import { githubLoadUser, githubResetUser } from '../auth' 

export const USERS_ADD = '@@users/ADD'
export const USERS_ADD_SUCCESS = '@@users/ADD_SUCCESS'
export const USERS_ADD_FAILURE = '@@users/ADD_FAILURE'
export const USERS_FETCH = '@@users/FETCH'
export const USERS_FETCH_SUCCESS = '@@users/FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = '@@users/FETCH_FAILURE'
export const USERS_LOAD = '@@users/LOAD'
export const USERS_LOGOUT = '@@users/LOGOUT'

const addUserSuccess = user => ({
    type: USERS_ADD_SUCCESS,
    user,
})

const addUserFailure = error => ({
    type: USERS_ADD_FAILURE,
    error,
})

export const addUser = user =>
    dispatch => {
        dispatch({ type: USERS_ADD })
        firebase.database().ref('/users/' + user.uid)
            .set({
                email: user.email,
            })
          .then(user => dispatch(addUserSuccess(user)))
          .catch(error => dispatch(addUserFailure(error)))
    }

const fetchUsersSuccess = list => ({
    type: USERS_FETCH_SUCCESS,
    list,
})

const fetchUsersFailure = error => ({
    type: USERS_FETCH_FAILURE,
    error,
    isLoading: false,
})

const listenUser = (snapshot, users, dispatch) => {
    snapshot.forEach((childSnapshot) => {
        users[snapshot.key] = {
            ...users[snapshot.key],
            [childSnapshot.key]: childSnapshot.val()
        }
    })
    return dispatch(fetchUsersSuccess(users))
}

export const fetchUsers = users =>
    dispatch => {
        dispatch({ type: USERS_FETCH })
        const users = {}
        return firebase.database().ref('/users/').on('child_added', snapshot => listenUser(snapshot, users, dispatch))
    }

export const fetchByUserId = id =>
    dispatch => {
        return firebase.database().ref('/users/'+id).once('value')
            .catch(error => dispatch(fetchUsersFailure(error)))
    }

export const changeUserAuthState = user =>
    dispatch => {
        if (user) {
            dispatch(fetchByUserId(user.uid))
                .then((snapshot) => {
                    if (snapshot.val() === undefined)
                        dispatch(addUser(user))
                    dispatch(githubLoadUser(user))
                })
        } else
            dispatch(() => githubResetUser())
    }

const initialState = {
    list: {},
    isLoading: false,
    error: false,
}

export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case USERS_ADD_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.user.uid]: action.user
                },
            }
        case USERS_ADD_FAILURE:
            return {
                ...state,
                error: action.error,
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
