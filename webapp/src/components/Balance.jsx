import React, { useState } from 'react'

const Balance = () => {
  const [accountInfo, setAccountInfo] = useState('')
  const { ethereum } = window
  const selectedAddress = ethereum.selectedAddress
  setAccountInfo(selectedAddress)

  return (
    <div>
      <p>The balance is stored here.</p>
      <p>The address is {accountInfo}</p>
    </div>
  )
}

export default Balance
