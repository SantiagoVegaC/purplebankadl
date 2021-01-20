/* import external modules */
import React from 'react'

import { shallow } from 'enzyme'

/* import internal modules */
import Footer from '../../../components/Footer/Footer'

describe('Test Maquetación', () => {
  test('Render Footer component <Footer />', () => {
    const footer = shallow(<Footer />)
    expect(footer.length).toEqual(1)
  })
})
