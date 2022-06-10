import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { WalletProvider } from 'contexts/WalletContext'

ReactDOM.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
