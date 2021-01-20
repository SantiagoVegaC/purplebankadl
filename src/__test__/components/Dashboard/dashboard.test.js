import { shallow } from 'enzyme'
import Dashboard from '../../../components/Dashboard/Dashboard'
import ProviderMock from '../../../__mocks__/ProviderMock'

const ProviderComponet = () => (
  <ProviderMock>
    <Dashboard />
  </ProviderMock>
)

const DashboardShallow = shallow(<ProviderComponet />)

test('Render Dashboard component', () => {
  expect(DashboardShallow).toHaveLength(1)
})
