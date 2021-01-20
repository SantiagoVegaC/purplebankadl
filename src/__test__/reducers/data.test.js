import data from '../../helpers/data.json'
import { type } from '../../helpers/type'
import { SET_DATA, SET_OTHER_DATA } from '../../redux/types/types'
import * as actions from '../../redux/actions/data'

describe('Test SET_DATA and SET_OTHER_DATA actions', () => {
  test('should set SET_DATA', () => {
    const filterData = data?.filter(
      (pbdata) => pbdata.product.issuer === type.PURPLE_BANK
    )
    const expectedAction = {
      type: SET_DATA,
      payload: { data: filterData },
    }
    expect(actions.setData(filterData)).toEqual(expectedAction)
  })
  test('should set SET_OTHER_DATA', () => {
    const filterOtherData = data?.filter(
      (pbdata) => pbdata.product.issuer !== type.PURPLE_BANK
    )
    const expectedAction = {
      type: SET_OTHER_DATA,
      payload: { data: filterOtherData },
    }
    expect(actions.setOtherData(filterOtherData)).toEqual(expectedAction)
  })
})
