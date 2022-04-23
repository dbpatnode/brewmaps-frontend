import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const footer = './images/home_page_botom.png';
  const background = './brewery_background.png';
  return (
    <div>
      <div className='home'>
        <div className='container'>
          <img src={background} alt='brewery' className='top-image'></img>
          <div className='top-left'>
            <div className='title'>
              <h1>
                YOUR <br />
                BREWERY
                <br />
                WISHLIST
                <br />
              </h1>
            </div>
            <div className='home-page-buttons'>
              <Link to='/login'>
                {' '}
                <button id='login-button'>LOGIN</button>
              </Link>
              <br />
              <Link to='/signup'>
                <button id='signup-button'>SIGN UP</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <img src={footer} alt='Hop Logo' id='welcome-image'></img>
      </div>
    </div>
  );
};

export default Home;
