import api, { setHeaders } from './axios'
import { rememberToken, getDecodedToken, getValidToken } from './token'

function extractToken(res) {
  return res.headers.authorization.split(' ')[1]
}

export function signIn(data) {
  setHeaders(getValidToken())
  return api.post('/v1/auth/sign_in', data)
    .then((res) => {
      rememberToken(extractToken(res))
      return getDecodedToken()
    })
    .catch((error) => {
      if (/ 401/.test(error.message)) {
        error = new Error('The email/password combination was incorrect')
      }
      throw error
    })
}

export function signUp(data) {
  setHeaders(getValidToken())
  return api.post('/v1/auth/sign_up', data)
    .then((res) => {
      rememberToken(extractToken(res))
      return getDecodedToken()
    })
}

export function signOut() {
  setHeaders(getValidToken())
  return api.delete('/v1/auth/sign_in')
    .then((res) => {
      rememberToken(null)
      return null
    })
}