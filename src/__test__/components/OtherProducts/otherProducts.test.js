import React from 'react'
import { shallow, mount } from 'enzyme'
import OtherProducts from '../../../components/OtherProducts/OtherProducts.component'
import ProviderMock from '../../../__mocks__/ProviderMock'

const ProviderComponet = () => (
  <ProviderMock>
    <OtherProducts />
  </ProviderMock>
)

const OtherProductsShallow = shallow(<ProviderComponet />)
const mockIndex = jest.fn()
const wrapper = mount(<ProviderComponet onClick={mockIndex} />)

describe('Test to OtherProducts component', () => {
  test('Render OtherProducts component', () => {
    expect(OtherProductsShallow).toHaveLength(1)
  })
  test('should clic button', () => {
    wrapper.find('button').at(1).simulate('click')
  })
})
