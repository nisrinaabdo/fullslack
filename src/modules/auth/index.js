
export const GITHUB_AUTH = '@@github/AUTH'
export const GITHUB_AUTH_SUCCESS = '@@github/AUTH_SUCCESS'
export const GITHUB_AUTH_FAILURE = '@@github/AUTH_FAILURE'


const provider = new firebase.auth.GithubAuthProvider();

const githubAuth = (data) => {
    (dispatch) => {
        dispatch({ type: GITHUB_AUTH })
        return firebase.auth().signInWithRedirect(provider)
        .then(githubAuthSuccess())
        .catch(githubAuthFailure());
    }
}

const githubAuthSuccess = (result)=> {
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

const githubAuthFailure = (error) => {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // The email of the user's account used.
   var email = error.email;
   // The firebase.auth.AuthCredential type that was used.
   var credential = error.credential;
   // ...
   return {
       type: GITHUB_AUTH_FAILURE,
       error,
   }
}

const initialState = {
    user: {},
    token: '',
    error: {},
}

export const reducer = (state = initialState , action) => {
    switch(action.type) {
        case GITHUB_AUTH:
            return {
                ...state,
                initialState
            }
        case GITHUB_AUTH_FAILURE:
            return {
                ...state,
                error: action.error,
            }
        case GITHUB_AUTH_SUCCESS:
            return {
                ...state,
                user : action.user,
                token: action.token,
            }
    }
}
