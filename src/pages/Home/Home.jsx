import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Welcome to Crypto Coins Live</h1>
        <p>Track your favourite cryptocurrencies in real-time.</p>
        <form >
          <input type="text" placeholder='Search Crypto...' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24h Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
      </div>

    </div>
  )
}

export default Home