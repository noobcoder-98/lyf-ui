import { useWallet } from 'contexts/WalletContext'
import React from 'react'
import { shortAddress } from 'utils/Commons'

export default function ButtonConnect() {
  const { connect, address, connected, disconnect } = useWallet()

  return (
    <div>
      {connected ? (
        <div className="round-btn green" onClick={() => disconnect()}>
          <div>{shortAddress(address)}</div>
        </div>
      ) : (
        <div className="round-btn green" onClick={() => connect()}>
          Connect to Wallet
        </div>
      )}
    </div>
  )
}
