import { SET_DATA, SET_OTHER_DATA } from '../types/types'

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
})

export const setOtherData = (data) => ({
  type: SET_OTHER_DATA,
  payload: { data },
})
