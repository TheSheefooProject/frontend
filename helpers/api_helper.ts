import axios from 'axios'

export async function login_api(username_email: string, password: string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/auth/login/'
  let loginData: { username?: string; email?: string; password: string } = {
    username: username_email,
    password: password,
  }
  // email format validation check
  if (username_email.includes('@')) {
    loginData = { email: username_email, password }
  }
  try {
    const userDetails = await axios.post(CONNECTION_STRING, loginData)
    window.localStorage.access_token = userDetails.data.accessToken
    window.localStorage.refresh_token = userDetails.data.refreshToken
    return 'success'
  } catch (e) {
    return 'failed'
  }
}

export async function register_api(username: string, email: string, password: string,firstName: string,lastName: string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/auth/register/'
  let registerData: { username: string; email: string; password: string;firstName: string;lastName: string } = {
    email: email,
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName
  }

  try {
    const response = await axios.post(CONNECTION_STRING, registerData)
    
    return response
  } catch (e) {
    return e
  }
}

export async function check_username_api(username: string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/user/' + username
let outcome = false;
  try {
    const response = await axios.get(CONNECTION_STRING)
    
    if(response.data.status == 'success') {
      outcome = false;
    }
  } catch (e) {
    outcome = true
  }
  return outcome;
}
type API_TYPES = 'GET' | 'POST' | 'PATCH' | 'DELETE'
export async function general_api(
  url: string,
  TYPE: API_TYPES = 'GET',
  body: any = {},
  returnJustData = true
) {
  const accessToken = window.localStorage.access_token
  const refreshToken = window.localStorage.refresh_token
  if (!accessToken) {
    throw new Error('No access token present')
  }
  const headers = {
    Authorization: 'Bearer ' + accessToken,
    refresh_token: refreshToken,
  }
  if (TYPE == 'GET') {
    const result = await axios.get(url, { headers })
    if (result.headers.access_token) {
      window.localStorage.access_token = result.headers.access_token
    }
    return returnJustData ? result.data : result
  } else if (TYPE == 'POST') {
    const result = await axios.post(url, body, { headers })
    if (result.headers.access_token) {
      window.localStorage.access_token = result.headers.access_token
    }
    return returnJustData ? result.data : result
  } else if (TYPE == 'DELETE') {
    axios.delete(url, { headers })
    const result = await axios.delete(url, { headers })
    if (result.headers.access_token) {
      window.localStorage.access_token = result.headers.access_token
    }
    return returnJustData ? result.data : result
  } else {
    const result = await axios.patch(url, body, { headers })
    if (result.headers.access_token) {
      window.localStorage.access_token = result.headers.access_token
    }
    return returnJustData ? result.data : result
  }
}
