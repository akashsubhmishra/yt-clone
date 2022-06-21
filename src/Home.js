import Header from './Header'
import Sidebar from './Sidebar'
import Recommended from './Recommended'
import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="Home">
        <Header />
      <div className='Home-page'>
        <Sidebar className='Home-side' />
        <Recommended className='Home-recommended' />
      </div>
    </div>
  );
}

export default Home;