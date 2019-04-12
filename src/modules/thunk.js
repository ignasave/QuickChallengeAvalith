import axios from 'axios'
import { 
    setData,
    setDetail,
    fetch_data,  
    fetch_detail,
    recieve_error,
    recieve_error_detail,
    
} from './breeds'

export const getData = () => {
  return (dispatch, getState) => {
    if (getState().breeds.breeds.length === 0) {
      dispatch(fetch_data())
      axios
        .get('https://dog.ceo/api/breeds/list')
        .then(response => {
          dispatch(setData(response.data.message))
        })
        .catch((error) => {
          console.log(error);
          dispatch(recieve_error())
        })
    }
  }
}

export const getDetail = breed => {
    return dispatch => {
      dispatch(fetch_detail())
      axios
        .get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
          dispatch(setDetail(response.data.message))
        })
        .catch((error) => {
          console.log(error);
          dispatch(recieve_error_detail())
        })
    }
}