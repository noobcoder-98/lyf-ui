import React from 'react'
import PoolItem from './StakingItem'
import './index.scss'

export default function Stake() {
  return (
    <div className="stake">
      <div className="reward-summary">
        <div className="title-big"> Your Rewards Summary </div>
        <div className="reward-content">
          <div className="earned">
            <div className="title">
              ALPACA <br /> earned :
            </div>
            <div className="value-big">0.00</div>
          </div>
          <div className="reward-info">
            <div className="your-balance">
              <div className="title">
                Your ALPACA <br /> Wallet Balance :
              </div>
              <div className="value-big">0.00</div>
            </div>
            <div className="detail">
              <div className="locked">
                <div className="title-small">
                  Remaining <br /> Locked Amount :
                </div>
                <div className="value">0.00</div>
                <div className="note">
                  Your locked rewards are linearly released over 7 days starting from block#
                  6,499,649 to block# 6,699,649
                </div>
              </div>
              <div className="divider" />
              <div className="unlocked">
                <div className="title-small">
                  Unlocked <br /> Rewards
                </div>
                <div className="value">0.0</div>
                <div className="round-btn green">Claim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="staking">
        <div className="title-big">8 Available Staking Opportunities</div>
        <div className="filter-options"></div>
        <div className="staking-items">
          <PoolItem />
          <PoolItem />
        </div>
      </div>
    </div>
  )
}
