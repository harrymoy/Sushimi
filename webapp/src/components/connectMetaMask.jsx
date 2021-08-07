import React, { useState, useRef, useEffect } from 'react';
import { ethers } from 'ethers';

const ConnectMetaMask = () => {

    // ethers lib instance
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // get all accounts
    let onboardButton = useRef();
    const [buttonText, setButtonText] = useState("Connect to MetaMask")
    const [addr, setAddr] = useState('');
    const [chain, setChain] = useState('');
    const [balance, setBalance] = useState('');

    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        if (window.ethereum.isMetaMask) {
            setButtonText("Connect to MetaMask")
        } else {
            setButtonText("MetaMask is not installed!")
        }
    };

    const connectMetaMask = async () => {
        isMetaMaskInstalled();
        onboardButton.current.setAttribute("disabled", "disabled");
        try {
            // Will open the MetaMask UI
            // You should disable this button while the request is pending!
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await signer.getAddress();
            let walletBalance = await signer.getBalance();
            walletBalance = ethers.utils.formatEther(walletBalance)
            walletBalance = Math.round(walletBalance * 1e4) / 1e4;
            setAddr(accounts);
            setBalance(walletBalance);
            chainChecker(window.ethereum.chainId);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload() && chainChecker(_chainId));
    },[])

    const chainChecker = (chainId) => {
        const chainMapping = new Map()
        chainMapping.set('0x1', "Ethereum Main Network (Mainnet)")
        chainMapping.set('0x3', "Ropsten Test Network")
        chainMapping.set('0x4', "Rinkeby Test Network")
        chainMapping.set('0x5', "Goerli Test Network")
        chainMapping.set('0x2a', "Kovan Test Network")
        setChain(chainMapping.get(chainId))
    }

    return (
        <div>
            <button ref={onboardButton} onClick={connectMetaMask}>{buttonText}</button>
            <div>
                <p>The address is {addr} with {balance} ETH</p>
                <p>You are on {chain}.</p> 
            </div>
        </div>
    )
}

export default ConnectMetaMask;