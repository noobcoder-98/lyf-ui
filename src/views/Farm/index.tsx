import React from 'react'
import PoolItem from './PoolItem'
import './index.scss'

export default function Farm() {
  return (
    <div className="farm-container">
      <div className="title-big">Active Pools (51)</div>
      <div className='filter-options'>Filter options</div>
      <div className='tbl'>
          <div className='tbl-header'>
              <div className='tbl-col'>Pool</div>
              <div className='tbl-col'>APY</div>
              <div className='tbl-col'>Yield (APR)</div>
              <div className='tbl-col'>Leverage</div>
              <div className='tbl-col'></div>
          </div>
          <PoolItem />
          <PoolItem />
          <PoolItem />
          <PoolItem />
      </div>
    </div>
  )
}
