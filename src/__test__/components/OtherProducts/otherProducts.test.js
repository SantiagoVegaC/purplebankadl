import React from 'react'
import { shallow } from 'enzyme'
import OtherProducts from '../../../components/OtherProducts/OtherProducts.component'
import ProviderMock from '../../../__mocks__/ProviderMock'

const ProviderComponet = () => (
  <ProviderMock>
    <OtherProducts />
  </ProviderMock>
)

const OtherProductsShallow = shallow(<ProviderComponet />)

describe('Test to OtherProducts component', () => {
  test('Render OtherProducts component', () => {
    expect(OtherProductsShallow).toHaveLength(1)
  })
})
