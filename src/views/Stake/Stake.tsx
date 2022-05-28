import React from 'react'
import PoolItem from './components/PoolItem'
import './index.scss'

export default function Stake() {
  return (
    <div className="stake">
      <div className="title"> Your Rewards Summary </div>
      <div className="reward-summary">
        <div className="earned">Earn</div>
        <div className="reward-info">
          <div className="your-balance">Your balance</div>
          <div className="detail">
            <div className="locked">
              <div className="title">Remaining Locked Amount :</div>
              <div className="value">0.00</div>
            </div>
            <div className="unlocked">
              <div className="title">Unlocked Rewards</div>
              <div className="value">0.0</div>
              <div className="round-btn">Claim</div>
            </div>
          </div>
        </div>
      </div>
      <div className="staking">
        <div className="filter-options"></div>
        <div className="pools">
          <PoolItem />
        </div>
      </div>
    </div>
  )
}
