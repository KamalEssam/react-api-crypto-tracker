import React from 'react'

const Coin = (image , name ,symbole,price) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin' >
                    <img src='{image}' alt='coin' />
                    <h1 className='coin-name'>{name}</h1>
                    <p className='coin-symbol'>{symbole}</p>
                </div>
                <div className='coin-data'>
                    <p></
                </div>
            </div>
        </div>
    )
}

export default Coin

