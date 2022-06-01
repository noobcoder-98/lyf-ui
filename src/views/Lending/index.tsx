import React from 'react'
import './index.scss'
import LendingPoolItem from './LendingPoolItem'
export default function Lending() {
  return (
    <div className="lending-container">
      <div className="lending-title">
        <div className="title-big">Available Lending Pools</div>
        <div className="total-value">
          <div className="title-big">Total Value Locked</div>
          <div className="value">$693,352,109.69</div>
          <div className='divider'/>
          <div className="token-detail">$671.27M + $22.15M</div>
        </div>
      </div>
      <div className="lending-pool">
          <div className='tbl'>
              <div className='tbl-header'>
                  <div className='tbl-col-icon' />
                  <div className='tbl-col'>APY</div>
                  <div className='tbl-col'>Total Supply</div>
                  <div className='tbl-col'>Total Borrowed</div>
                  <div className='tbl-col'>Utilization</div>
                  <div className='tbl-col'>Your Balance</div>
                  <div className='tbl-col' />
              </div>
              <LendingPoolItem />
              <LendingPoolItem />
              <LendingPoolItem />
              <LendingPoolItem />
          </div>
      </div>
    </div>
  )
}
