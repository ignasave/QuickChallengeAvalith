import { 
  SET_DATA,
  SET_DETAIL,
  FETCH_DATA,
  FETCH_DETAIL,
  RECIEVE_ERROR,
  RECIEVE_ERROR_DETAIL,
} from './types'

const initialState = {
  breeds: [],
  imageUrl: '',
  isFetchingDetail: false,
  isErrorDetail: false,
  isFetchingBreeds: false,
  isErrorBreeds: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        breeds: action.data,
        isFetchingBreeds: false
      }

    case SET_DETAIL:
      return {
        ...state,
        imageUrl: action.data,
        isFetchingDetail: false
      }

    case FETCH_DATA:
      return {
        ...state,
        isFetchingBreeds: true
      }

    case FETCH_DETAIL:
      return {
        ...state,
        isFetchingDetail: true,
        isErrorDetail: false
      }
    case RECIEVE_ERROR:
      return {
        ...state,
        isErrorBreeds: true,
        isFetchingBreeds: false
      }

    case RECIEVE_ERROR_DETAIL:
      return {
        ...state,
        isFetchingDetail: false,
        isErrorDetail: true
      }
    default:
      return state
  }
}

export const setData = breeds => {
  return dispatch => {
    dispatch({ type: SET_DATA, data: breeds })
  }
}

export const setDetail = url => {
  return dispatch => {
    dispatch({ type: SET_DETAIL, data: url })
  }
}

export const fetch_detail = () => {
  return dispatch => {
    dispatch({ type: FETCH_DETAIL })
  }
}

export const fetch_data = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA })
  }
}

export const recieve_error = () => {
  return dispatch => {
    dispatch({ type: RECIEVE_ERROR })
  }
}

export const recieve_error_detail = () => {
  return dispatch => {
    dispatch({ type: RECIEVE_ERROR_DETAIL })
  }
}


