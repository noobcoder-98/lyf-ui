import { CONTRACT } from 'configs/constants'
import { TOKEN_ADDRESS } from 'configs/constants/Tokens'
import React, { useContext, useEffect, useState } from 'react'
import { useWallet } from './WalletContext'
import { ethers } from 'ethers'

interface ITokenState {
  balances: { [address: string]: number }
  getBalances: () => void
}

const INITIAL_STATE: ITokenState = {
  balances: {},
  getBalances: () => {},
}

const TokenContext = React.createContext<ITokenState>(INITIAL_STATE)

export const ASSETS_ADDRESS = [TOKEN_ADDRESS.UPFI, TOKEN_ADDRESS.USDC]

export function TokenProvider({ children = null as any }) {
  const [state, setState] = useState(INITIAL_STATE)
  const { address } = useWallet()

  const getBalances = async () => {
    if (address) {
      let balances = state.balances
      ASSETS_ADDRESS.map(async (tokenAddress) => {
        const balance = await CONTRACT.ERC20(tokenAddress).methods.balanceOf(address).call()
        balances[tokenAddress] = parseFloat(ethers.utils.formatEther(balance))
      })
      setState({
        ...state,
        balances,
      })
    }
  }

  useEffect(() => {
    getBalances()
  }, [address])

  return (
    <TokenContext.Provider
      value={{
        ...state,
        getBalances,
      }}
    >
      {children}
    </TokenContext.Provider>
  )
}

export function useToken() {
  const { balances, getBalances } = useContext(TokenContext)
  return {
    balances,
    getBalances,
  }
}
