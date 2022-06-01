import React from 'react'
import IcAlpaca from 'assets/images/alpaca.svg'
import { NavLink } from 'react-router-dom'

export default function LendingPoolItem() {
  return (
    <div className="tbl-row">
      <div className="tbl-col-icon">
        <div className="col-icon-holder">
          <img src={IcAlpaca} alt="" />
        </div>
        <div className="col-icon-text">
          <div className="title">ALPACA</div>
          <div className="price">1 ibALPACA = 1.0184 ALPACA</div>
        </div>
      </div>
      <div className="tbl-col value-small">APY 0.32%</div>
      <div className="tbl-col">13.83M ALPACA</div>
      <div className="tbl-col">1.46M ALPACA</div>
      <div className="tbl-col">10.58%</div>
      <div className="tbl-col">
        0.00 ibALPACA <br /> 0.00 ALPACA
      </div>
      <div className="tbl-col btn-holder">
        <NavLink to={`/lending/${'deposit'}/${1}`}>
          <div className="transparent-btn">Deposit</div>
        </NavLink>
        <NavLink to={`/lending/${'withdraw'}/${1}`}>
          <div className="transparent-btn">Withdraw</div>
        </NavLink>
      </div>
    </div>
  )
}
