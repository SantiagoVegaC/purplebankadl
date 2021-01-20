import { SET_DATA, SET_OTHER_DATA } from '../types/types'

const initialState = {
  data: null,
  otherData: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      }
    case SET_OTHER_DATA:
      return {
        ...state,
        otherData: action.payload.data,
      }

    default:
      return state
  }
}
