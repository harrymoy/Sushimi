import React, { useState } from 'react';
import './styles.scss'

const ToToken = () => {

    const [toToken, SetToToken] = useState("ETH")

    return (
        <div className="from-token">
        <h2>To Token</h2>
        <form>
            <select value={SetToToken}>
                <option value="USD">USD</option>
                <option value="Ethereum">ETH</option>
                <option value="Bitcoin">BTC</option>
            </select>
        </form>
        </div>    
    )
}

export default ToToken;