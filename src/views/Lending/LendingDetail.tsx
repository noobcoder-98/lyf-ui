import React from 'react'
import IcAlpaca from 'assets/images/alpaca.svg'
import { Input } from 'antd'
import { NavLink } from 'react-router-dom'

export default function LendingDetail() {
  return (
    <div className="lending-detail">
      <div className="title-big">
        Depositing ALPACA <img src={IcAlpaca} alt="" />
      </div>
      <div className="title">Available Balance : 0.00 ALPACA</div>
      <div className="input-number">
        <Input prefix={<img src={IcAlpaca} />} suffix="ALPACA" placeholder="0.00" />
      </div>
      <div className="receive">
        <span className="title">You will receive </span>{' '}
        <span className="value-small">~0.00 ALPACA</span>
      </div>
      <div className="btn-holder">
        <NavLink to={`/lending/`}>
          <div className="transparent-btn">Back</div>
        </NavLink>
        <NavLink to={`/lending/`}>
          <div className="transparent-btn">Confirm</div>
        </NavLink>
      </div>
    </div>
  )
}
