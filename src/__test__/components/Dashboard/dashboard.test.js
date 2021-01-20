import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../../components/Dashboard/Dashboard.component'
import ProviderMock from '../../../__mocks__/ProviderMock'

const ProviderComponet = () => (
  <ProviderMock>
    <Dashboard />
  </ProviderMock>
)

const DashboardShallow = shallow(<ProviderComponet />)

describe('Test to Dashboard component', () => {
  test('Render Dashboard component', () => {
    expect(DashboardShallow).toHaveLength(1)
  })
})
