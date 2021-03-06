import React from 'react'
import Css
const Coin = ({ image, name, symbol, 
    price, volume, priceChange,marketcap }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin' >
                    <img src={image} alt='coin' />
                    <h1 className='coin-name'>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange}%</p>
                    ) : (
                        <p className='coin-percent green'>{priceChange}%</p>
                    )}
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin

