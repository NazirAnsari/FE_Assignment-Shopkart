import React, { useState, useEffect } from 'react';
import { navbar } from './NavbarItem';
import './App.css'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import insta from './images/insta.png'
import linkdin from './images/linkdin.png'
import twitter from './images/twitter.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import boy from './images/boy.png'
import hr from './images/hr.png'
import fresh from './images/fresh.png'
import two from './images/two.png'
import look from './images/look.png'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import Products from './Products';
import Footer from './Footer';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = ({ items, showNav }) => {
  return (
    <nav>
      {showNav ?
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.id === 'product' ? (
                <div>
                  <select>
                    <option value="">{item.name}</option>
                    {item.child.map((childItem) => (
                      <option key={childItem.id} value={childItem.id}>
                        {childItem.name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <a href={`#${item.id}`}>{item.name}</a>
              )}
            </li>
          ))}
        </ul> : ''}
    </nav>
  );
};

const App = () => {
  const [showNav, setShowNav] = useState(true)
  const updateShowNav = () => {
    if (window.innerWidth <= 600) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    updateShowNav();
    window.addEventListener('resize', updateShowNav); 

    return () => {
      window.removeEventListener('resize', updateShowNav);
    };
  }, []);

  return (
    <div>
      <div className="main-heading">
        <div className="termsAndCondtions">
          <LocalShippingOutlinedIcon style={{ margin: "0.5rem" }} />
          <span>Free Delivery | Return Policy</span>
        </div>
        <div className="socialMedia">
          <button className="login">Login </button>
          <button className="followUs">Follow US </button>
          <FacebookOutlinedIcon style={{ border: "1px solid white", height: '27px', borderRadius: "50%" }} />
          <img src={linkdin} className='icon' alt="" />
          <img src={twitter} className='icon' alt="" />
          <img src={insta} className='icon lastIcon' alt="" />
        </div>
      </div>
      <div className="heading-tilte">
        <div className="web-title">ShopKart</div>
        <div className="product-buy">
          {showNav ? <><span>WISHLIST (0) </span>
            <span style={{ marginRight: '10px' }}>BAG (0)</span> </> : <MenuIcon className='menuIcon'/>}
        </div>
      </div>
      <header>
        <img src={hr} alt="Underline" id='hrTAg' />
        <NavBar items={navbar} showNav={showNav} />
        <div className="header-img">
          <div className='imgBg'></div>
          <img src={fresh} alt="" className='fresh' />
          <img src={two} alt="" className='twoTwo' />
          <img src={look} alt="" className='look' />
          <div className="borderBgImg"></div>
        </div>
        <button className='seeMore'>See more <ArrowOutwardOutlinedIcon /> </button>
      </header>
      <Products />
      <Footer />
    </div>
  );
};

export default App;
