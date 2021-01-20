/* import external modules */
import React from 'react'

import { shallow } from 'enzyme'

/* import internal modules */
import Header from '../../../components/Header/Header'

describe('Test', () => {
  test('Render Header component <Header />', () => {
    const header = shallow(<Header />)
    expect(header.length).toEqual(1)
  })
})
