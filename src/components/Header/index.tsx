import React from 'react'
import Logo from 'assets/images/logo.png'
import './index.scss'
import ButtonConnect from 'components/Button/ButtonConnect'

export default function Header() {
  return (
    <div className="header">
      <div className="site-identify desktop-only">
        <img src={Logo} alt="" />
        <span className="app-name">UPFI Network</span>
      </div>
      <div className="header-items">
        <ButtonConnect />
      </div>
    </div>
  )
}
