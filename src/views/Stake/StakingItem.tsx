import React, { useState } from 'react'
import './index.scss'
import { IcIbBnb } from 'assets/icons'
import NumberFormat from 'react-number-format'
export default function PoolItem() {
  const [isDisplay, setDisplay] = useState(true)

  return (
    <div className="staking-item">
      <div className="title">Stake ibUSDC to earn ALPACA rewards</div>
      <div className="item-container" onClick={() => setDisplay(!isDisplay)}>
        <IcIbBnb />
        <div className="name">ibUSDC</div>
        <div className="apy">
          <div className="name-small">APY</div>
          <div className="value">10.97%</div>
        </div>
        <div className="tvl">
          <div className="name-small">TVL</div>
          <div className="value">10.51M</div>
        </div>
        <div className="more-info">
          <div className="staked-balance">
            <div className="name-small">Staked Balance : </div>
            <div className="value">0.00 ibUSDC (~0.00 USDC)</div>
          </div>
          <div className="earned-info">
            <div className="name-small">ALPACA earned : </div>
            <div className="value">0.00</div>
          </div>
          <div className="arrow-btn"></div>
        </div>
      </div>
      {isDisplay && (
        <div className="interface">
          <div className="input-container">
            <div className="approve col">
              <div className="title-small row">Available ibUSDC Balance: 0.00</div>
              <div className="input-number row">
                <NumberFormat className='number-format' placeholder="0.0" />
              </div>
              <div className='row'><br /></div>
              <div className="round-btn green">Approve</div>
            </div>
            <div className="unstake col">
              <div className="title-small row">Staked AUSD-3EPS LP Balance: 0.00</div>
              <div className="input-number row">
                <NumberFormat className='number-format' placeholder="0.0" />
              </div>
              <div className='title-small row'>Approximate Value: BUSD</div>
              <div className="round-btn green">Unstake</div>
            </div>
          </div>
          <div className='divider'></div>
          <div className="claim-container">
            <div className="title-small row">Total ALPACA Rewards:</div>
            <div className="value row">0.00</div>
            <div className="round-btn green">Claim</div>
          </div>
        </div>
      )}
    </div>
  )
}
