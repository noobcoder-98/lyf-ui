import React, { useContext, useState } from 'react'
import Web3 from 'web3'
import Web3Modal from 'web3modal'

interface IWalletState {
  connect: () => void
  disconnect: () => void
  fetching: boolean
  address: string
  web3: Web3
  provider: any
  connected: boolean
  chainId: number
  networkId: number
  showModal: boolean
  pendingRequest: boolean
  result: any
}

const INITIAL_STATE: IWalletState = {
  connect: () => {},
  disconnect: () => {},
  fetching: false,
  address: '',
  web3: new Web3(window.ethereum),
  provider: undefined,
  connected: false,
  chainId: 1,
  networkId: 1,
  showModal: false,
  pendingRequest: false,
  result: null,
}

const WalletContext = React.createContext<IWalletState>(INITIAL_STATE)

export function WalletProvider({ children = null as any }) {
  const [state, setState] = useState(INITIAL_STATE)

  const web3Modal = new Web3Modal({
    network: '',
    cacheProvider: true,
    providerOptions: {},
    disableInjectedProvider: false,
  })

  const connect = async () => {
    const provider = await web3Modal.connect()
    await subcribeProvider(provider)
    await provider.enable()
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()
    const address = accounts[0]
    const networkId = await web3.eth.net.getId()
    const chainId = await web3.eth.getChainId()
    debugger
    setState((e) => ({
      ...e,
      fetching: false,
      address: address,
      web3: web3,
      provider: provider,
      connected: true,
      chainId: chainId,
      networkId: networkId,
      showModal: false,
      pendingRequest: false,
      result: null,
    }))
  }

  const disconnect = () => {
    resetApp()
  }

  const subcribeProvider = async (provider: any) => {
    if (!provider.on) {
      return
    }

    provider.on('close', () => {
      resetApp()
    })

    provider.on('accountsChanged', async (accounts: string[]) => {
      if (accounts[0]) {
        setState((e) => ({
          ...e,
          address: accounts[0],
        }))
      } else {
        resetApp()
      }
    })

    provider.on('chainChanged', async () => {
      const networkId = await state.web3.eth.net.getId()
      setState((e) => ({
        ...e,
        networkId,
      }))
    })

    provider.on('networkChanged', async () => {
      const chainId = await state.web3.eth.getChainId()
      setState((e) => ({
        ...e,
        chainId,
      }))
    })

    provider.on('disconnect', async () => {
      console.log('disconnected')
    })
  }

  const resetApp = async () => {
    web3Modal.clearCachedProvider()
    setState({
      ...INITIAL_STATE,
    })
  }

  return (
    <WalletContext.Provider
      value={{
        ...state,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const { web3, provider, connected, address, networkId, chainId, connect, disconnect } =
    useContext(WalletContext)
  return {
    web3,
    provider,
    connected,
    address,
    networkId,
    chainId,
    connect,
    disconnect,
  }
}
