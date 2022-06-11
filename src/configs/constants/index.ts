import Web3 from 'web3'
import { Abis } from '../abis'
const web = new Web3(window.ethereum)
export const CONTRACT = {
  ERC20: (address: string) => new web.eth.Contract(Abis.ERC20, address),
}
