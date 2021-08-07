import React from 'react'
import { ethers, utils } from 'ethers'
import IUniswapV2Router02 from '@sushiswap/core/build/abi/IUniswapV2Router02.json'

const SendEth = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  const tokenToWei = (eth) => {
    let wei = ethers.utils.parseEther(eth)
    return wei
  }

  const getPair = async () => {
    const account = await signer.getAddress()
    const amount = tokenToWei('200')
    const msgSender = tokenToWei('1')
    const nowPlus20min = Math.floor(Date.now() / 1000) + 60 * 20
    const gas = await provider.getGasPrice()
    console.log(utils.formatUnits(gas))
    var sushiRouterContract = new ethers.Contract(
      '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      IUniswapV2Router02,
      signer,
    )
    sushiRouterContract.swapETHForExactTokens(
      amount,
      [
        '0xc778417e063141139fce010982780140aa0cd5ab',
        '0xc2118d4d90b274016cB7a54c03EF52E6c537D957',
      ],
      account,
      nowPlus20min,
      { value: msgSender },
    )
  }

  return (
    <div>
      <button onClick={getPair}>Swap ETH for DAI</button>
    </div>
  )
}

export default SendEth
