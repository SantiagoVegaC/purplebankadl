/* import external modules */
import React from 'react'
import { shallow } from 'enzyme'
import Logo from '../../../assets/images/PURPLEBANK.png'

/* import internal modules */
import Header from '../../../components/Header/Header.component'

const HeaderShallow = shallow(<Header />)

describe('Test', () => {
  test('Render Header component', () => {
    expect(HeaderShallow.length).toEqual(1)
  })

  test('Find Logo into the Header component', () => {
    expect(HeaderShallow.find('img').prop('src')).toEqual(Logo)
  })

  test('Find Bienvenido into the Header component', () => {
    expect(HeaderShallow.text().includes('Bienvenido')).toBe(true)
  })
})
