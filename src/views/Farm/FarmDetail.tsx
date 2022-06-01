import { Input, Radio, Select, Slider, Space } from 'antd'
import { IcIbBnb } from 'assets/icons'
import IcBusd from 'assets/images/busd.svg'
import IcAlpaca from 'assets/images/alpaca.svg'
import React, { useState } from 'react'
import NumberFormat from 'react-number-format'
import DaySlider from './components/Slider/DaySlider'
import LeverageSlider from './components/Slider/LeverageSlide'
import Chart from 'chart.js/auto';
import { BasicChart } from './components/Chart/BasicChart'

import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

export default function FarmInteract() {
  const [isShowSimulator, setShowSimulator] = useState(true)
  const { Option } = Select
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  return (
    <div className="farm-detail">
      <div className="title-big">Farm ALPACA-BUSD PancakeSwap pool</div>
      <div className="farm-interface">
        <div className="title-big">How much would you like to add for farming?</div>
        <div className="first-token">
          <div className="title">Available Balance : 0.00 BUSD</div>
          <div className="input-number">
            <Input
              prefix={<img style={{ width: '28px' }} src={IcBusd} />}
              suffix="BUSD"
              placeholder="0.00"
            />
            <div className="price">1 BUSD = 1.00 BUSD</div>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">25%</Radio.Button>
              <Radio.Button value="b">50%</Radio.Button>
              <Radio.Button value="c">75%</Radio.Button>
              <Radio.Button value="d">100%</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="second-token">
          <div className="title">Available Balance : 0.00 ALPACA</div>
          <div className="input-number">
            <Input prefix={<img src={IcAlpaca} />} suffix="ALPACA" placeholder="0.00" />
            <div className="price">1 ALPACA = 0.319 BUSD</div>
            <Radio.Group defaultValue="a" size="large">
              <Radio.Button value="a">25%</Radio.Button>
              <Radio.Button value="b">50%</Radio.Button>
              <Radio.Button value="c">75%</Radio.Button>
              <Radio.Button value="d">100%</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="title">Leverage</div>
        <div className="leverage-slider slider">
          <LeverageSlider />
        </div>
        <div className="token-type">
          <div>Which asset would you like to borrow?</div>
          <Select defaultValue="busd" style={{ width: 120 }} onChange={handleChange}>
            <Option value="busd">
              <img style={{ width: '28px' }} src={IcBusd} /> BUSD
            </Option>
            <Option value="alpaca">
              <img style={{ width: '28px' }} src={IcAlpaca} /> ALPACA
            </Option>
          </Select>
        </div>
      </div>
      <div className="info">
        <div className="info-row">
          <span>Yield Farm APR</span>
          <span>11.45% - 34.36%</span>
        </div>
        <div className="info-row">
          <span>Trading Fees APR(7-day avg.)</span>
          <span>4.72% - 14.17%</span>
        </div>
        <div className="info-row">
          <span>ALPACA Rewards APR</span>
          <span>3.43%</span>
        </div>
        <div className="info-row">
          <span>Borrowing Interest APR</span>
          <span>-18.69%</span>
        </div>
        <div className="info-row">
          <span>Total APR</span>
          <span>16.23% - 33.44%</span>
        </div>
        <div className="info-row">
          <span>Total APY</span>
          <span>17.62% - 39.69%</span>
        </div>
        <div className="info-row">
          <span>Neutral</span>
          <span>0.00 ALPACA</span>
        </div>
        <div className="info-row">
          <span>Neutral</span>
          <span>0.00 BUSD</span>
        </div>
        <div className="divider"></div>
        <div className="title-big">Summary</div>
        <div className="info-row">
          <span>Assets Supplied(Equity Value before fees)</span>
          <span>0.00 BUSD+ 0 ALPACA</span>
        </div>
        <div className="info-row">
          <span>Assets Borrowed(Debt Value)</span>
          <span>0.00 BUSD</span>
        </div>
        <div className="info-row">
          <span>Price Impact andTrading Fees </span>
          <span>0.00%</span>
        </div>
        <div className="info-row">
          <span>Total Assets inPosition Value</span>
          <span>0.00 BUSD+ 0.00 ALPACA</span>
        </div>
        <div className="info-row">
          <span>Share of Pool (Alpaca Finance) </span>
          <span>0.00% of 8.01M</span>
        </div>
        <div className="info-row">
          <span>Share of Pool (PancakeSwap) </span>
          <span>0.00% of 9.03M</span>
        </div>
      </div>
      {isShowSimulator && (
        <div className="simulator">
          <div className="title-big">ALPACA-BUSD Farming Simulator</div>
          <div className="title">Invest Days : </div>
          <div className="slider">
            <DaySlider />
          </div>
          <div className='chart'>
            <BasicChart chartData={""}/>
          </div>
        </div>
      )}
      <div className="btn-group">
        <div className="round-btn green farm-btn">Farm 3.00x</div>
        <div className="round-btn green simulator-btn" onClick={() => setShowSimulator(!isShowSimulator)}>
          Simulator
        </div>
      </div>
    </div>
  )
}
