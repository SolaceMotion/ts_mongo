import axios from 'axios'

// Action Creators
export const getPosts = () => async (dispatch: any) => {
  try {
    await axios.get('http://localhost:3001/api')
    const action = { type: 'FETCH_ALL', payload: [] }

    dispatch(action)
  } catch (error) {
    console.log(error.message)
  }
}
