import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
      <NavLink exact={true} to={'/farm'} className={'menu-item'}>
        Farm
      </NavLink>
      <NavLink exact={true} to={'/stake'} className={'menu-item'}>
        Stake
      </NavLink>
    </>
  )
}
