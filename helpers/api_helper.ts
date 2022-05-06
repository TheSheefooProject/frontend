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
export async function logout_api(email: string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/auth/logout/'
  let logoutData: { email?: string} = {
    email: email
  }

  try {
    const userDetails = await general_api(CONNECTION_STRING,"POST", logoutData)
    console.log(userDetails);
    
    return 'success'
  } catch (e) {
    return 'failed'
  }
}

export async function register_api(username: string, email: string, password: string,fullName: string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/auth/register/'
  let response:any = 'No response'
  let registerData: { username: string; email: string; password: string;full_name: string} = {
    email: email,
    username: username,
    password: password,
    full_name: fullName,
  }

  try {
    const res = await axios.post(CONNECTION_STRING, registerData)
    
    response = res

  } catch (e) {
    response = e
  }
  return response
}

// TODO FIX API TO USE CORRECT TOKEN TO RETURN USER DETAILS
export async function get_user_details_api(token:string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/user/'

  try {

    const response = await general_api(CONNECTION_STRING,"GET")
    console.log(response);

    return response
  } catch (e) {
    return e
  }
}
//TODO

export async function check_username_api(username: string) {

  const CONNECTION_STRING = 'http://localhost:3000/v1/user/' + username

  let outcome = false;

  try {
    const response = await axios.get(CONNECTION_STRING)

    if(response.data.status == 'success') {
      outcome = false;

    }
  } catch (e) { 
    console.log(e);
    outcome = true
  }

  return outcome;

}
// POSTS FEED HELPER FUNCTIONS
export async function get_all_posts(token:string) {
  const CONNECTION_STRING = 'http://localhost:3001/v1/posts/'

  try {

    const response = await general_api(CONNECTION_STRING,"GET")
    return response
  } catch (e) {
    return e
  }
}

export async function get_userdetails_by_id(id:string) {
  const CONNECTION_STRING = 'http://localhost:3000/v1/user/userdetails/' + id

  try {

    const response = await general_api(CONNECTION_STRING,"GET")
    return response
  } catch (e) {
    return e
  }
}
export async function create_post(title: string,content: string,first_hashtag: string,second_hashtag: string,third_hashtag: string,imageURL?: string,) {
  const CONNECTION_STRING = 'http://localhost:3001/v1/posts/'
  let postData: { title: string,content: string,first_hashtag: string,second_hashtag: string,third_hashtag: string,imageURL?: string,} = {
    title,
    content,
    first_hashtag,
    second_hashtag,
    third_hashtag,
    imageURL
  }

  try {
    const response = await general_api(CONNECTION_STRING,"POST", postData)
    console.log(response);
    
    return 'success'
  } catch (e) {
    return 'failed'
  }
}

// Livechat Helper Functions
export async function create_room(chat_room_id:string,user_id:string) {
  const CONNECTION_STRING = 'http://localhost:3005/v1/livechat/room/'
  let roomData: {chat_room_id:string,user_id:string } = {
   chat_room_id,
   user_id
  }

  try {
    const response = await general_api(CONNECTION_STRING,"POST", roomData)
    console.log(response);
    
    return 'success'
  } catch (e) {
    return 'failed'
  }
}

export async function get_room_messages(room_name:string) {
  const CONNECTION_STRING = 'http://localhost:3005/v1/messages/'+ room_name

  try {

    const response = await general_api(CONNECTION_STRING,"GET")
    return response
  } catch (e) {
    return e
  }
}

export async function get_rooms_by_user_id(user_id:string) {
  const CONNECTION_STRING = 'http://localhost:3005/v1/livechat/room/'+ user_id

  try {

    const response = await general_api(CONNECTION_STRING,"GET")
    return response
  } catch (e) {
    return e
  }
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
