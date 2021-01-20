import React from 'react'
import Logo from '../../assets/images/LogoPurpleBank.png'
import './Header.scss'

/** @description This functional component is the header component to the website
 *  @version 1.0.0
 *  @since 20/01/2021
 *  @author Santiago Vega Cortés <davidvega1414@gmail.com>
 *
 *  @function
 *  @name header
 *  @returns {Component} Returns components
 **/

const Header = () => {
  const userName = 'Santiago Vega Cortés'
  return (
    <div className="Header">
      <a href="/">
        <img src={Logo} alt="Purple Bank" />
      </a>
      <p>¡Bienvenido {userName}!</p>
    </div>
  )
}

export default Header
