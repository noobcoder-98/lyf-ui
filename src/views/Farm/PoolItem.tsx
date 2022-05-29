import React from 'react'
import { IcIbBnb } from 'assets/icons'
import IcCake from 'assets/images/cake.svg'
import IcBusd from 'assets/images/busd.svg'
import './index.scss'
import { DatePicker, InputNumber } from 'antd'

export default function PoolItem() {
  const onChange = (value: number) => {
    console.log('changed', value)
  }
  return (
    <div className="pool-item">
      <div className="tbl-row">
        <div className="tbl-col-icon">
          <div className="col-icon-holder">
            <img className="ant-image-img" src={IcCake} />
            <img className="ant-image-img" src={IcBusd} />
          </div>
          <div className="col-icon-content">
            <div className="name">CAKE-BUSD</div>
            <div>PSC Syrup</div>
            <div>TVL $458.07</div>
          </div>
        </div>
        <div className="tbl-col apy">
          <div className="value">38.34%</div>
          <div className="listed-value">17.28%</div>
        </div>
        <div className="tbl-col">
          <div className="yield-info">
            <span>Yield Farming : </span>
            <span>33.65%</span>
          </div>
          <div className="yield-info">
            <span>Trading Fees : </span>
            <span>14.17%</span>
          </div>
          <div className="yield-info">
            <span>ALPACA Rewards : </span>
            <span>3.42%</span>
          </div>
          <div className="yield-info">
            <span>Borrowing Interest : </span>
            <span>33.65%</span>
          </div>
          <div className="yield-info">
            <span>Total APR : </span>
            <span>32.47%</span>
          </div>
          <div className="yield-info">
            <span>Daily APR : </span>
            <span>0.0889%</span>
          </div>
        </div>
        <div className="tbl-col input-number">
          <InputNumber min={1} max={10} defaultValue={3} step={0.5}/>
        </div>
        <div className='tbl-col'>
          <div className='transparent-btn'>Farm</div>
        </div>
      </div>
    </div>
  )
}
