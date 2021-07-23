import React, { useState } from 'react';
import './styles.scss'

const FromToken = () => {

    const [fromToken, SetFromToken] = useState("ETH")

    return (
        <div className="from-token">
        <h2>From Token</h2>
        <form>
            <select value={SetFromToken}>
                <option value="USD">USD</option>
                <option value="Ethereum">ETH</option>
                <option value="Bitcoin">BTC</option>
            </select>
        </form>
        </div>    
    )
}

export default FromToken;