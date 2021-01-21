import React from 'react'
import { shallow, mount } from 'enzyme'
import Dashboard from '../../../components/Dashboard/Dashboard.component'
import ProviderMock from '../../../__mocks__/ProviderMock'

const ProviderComponet = () => (
  <ProviderMock>
    <Dashboard />
  </ProviderMock>
)

const DashboardShallow = shallow(<ProviderComponet />)
const mockIndex = jest.fn()
const wrapper = mount(<ProviderComponet onClick={mockIndex} />)

describe('Test to Dashboard component', () => {
  test('Render Dashboard component', () => {
    expect(DashboardShallow).toHaveLength(1)
  })
  test('should clic button', () => {
    wrapper.find('button').at(1).simulate('click')
  })
})
