import React, { useState } from 'react';
import './styles.scss'

const CurrentBalance = () => {

    const [balance, SetBalance] = useState(1000);

    return (
        <div className="balance-display">
            <div>&#163;</div>
            <p>{balance}</p>  
        </div>
    )
}

export default CurrentBalance;

