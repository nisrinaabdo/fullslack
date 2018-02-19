import * as firebase from 'firebase';

export const GITHUB_AUTH = '@@github/AUTH'
export const GITHUB_AUTH_SUCCESS = '@@github/AUTH_SUCCESS'
export const GITHUB_AUTH_FAILURE = '@@github/AUTH_FAILURE'
export const GITHUB_LOAD_USER = '@@github/LOAD_USER'
export const GITHUB_RESET_USER = '@@github/RESET_USER'
export const GITHUB_LOGOUT = '@@github/LOGOUT'
export const GITHUB_LOGOUT_SUCCESS = '@@github/LOGOUT_SUCCESS'
export const GITHUB_LOGOUT_FAILURE = '@@github/LOGOUT_FAILURE'

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('user');

export const githubAuth = (data) =>
    (dispatch) => {
        dispatch({ type: GITHUB_AUTH })
        firebase.auth().signInWithRedirect(provider)
        return firebase.auth().getRedirectResult()
        .then(result => dispatch(githubAuthSuccess(result)))
        .catch(error => dispatch(githubAuthFailure(error)))
    }

const githubAuthSuccess = (result) => {
    if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      return {
          type: GITHUB_AUTH_SUCCESS,
          user,
          token,
        }
}

const githubAuthFailure = (error) => ({
    type: GITHUB_AUTH_FAILURE,
    error,
})

const githubLogoutSuccess = user => ({
    type: GITHUB_LOGOUT_SUCCESS,
    user: null,
})

const githubLogoutFailure = error => ({
    type: GITHUB_LOGOUT_FAILURE,
    error,
})

export const githubLogout = () =>
    (dispatch) => {
        dispatch({ type: GITHUB_LOGOUT })
        firebase.auth().signOut()
            .then(() => dispatch(githubLogoutSuccess()))
            .catch(error => dispatch(githubLogoutFailure()))
    }

export const githubLoadUser = user => ({
    type: GITHUB_LOAD_USER,
    user,
})

export const githubResetUser = () => ({
    type: GITHUB_RESET_USER,
})

const initialState = {
    user: null,
    token: '',
    error: {},
}

export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case GITHUB_AUTH:
            return {
                ...state,
                ...initialState
            }
        case GITHUB_AUTH_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        case GITHUB_AUTH_SUCCESS:
            localStorage.setItem('token', action.token)
            return {
                ...state,
                user : action.user,
                token: action.token,
            }
        case GITHUB_LOAD_USER:
            return {
                ...state,
                user: action.user
            }

        case GITHUB_RESET_USER:
            return {
                ...state,
                user: null
            }
        case GITHUB_LOGOUT_SUCCESS:
            return {
                ...state,
                user: action.user,
            }
        case GITHUB_LOGOUT_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}
