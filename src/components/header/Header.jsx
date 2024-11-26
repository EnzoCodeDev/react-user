import "./header.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdWhatsapp, MdFacebook } from "react-icons/md";
import { TbBrandTiktok, TbBrandInstagram } from "react-icons/tb";
import Scroll from 'react-scroll';
import logo from '../../assets/majos/logo.png'

export const Header = () => {
  let location = useLocation();
  let scroll = Scroll.animateScroll;
  let navigate = useNavigate();
  const [bg, setBg] = useState(false);
  const [locationState, setLocationState] = useState('');

  let itemMenu = [{
    name: 'INICIO',
    redirect: '/home',
  }, {
    name: `PLAN ACCIÓN COMUNAL`,
    redirect: '/plan-accion-comunal',
  }, {
    name: `SOBRE NOSOTROS`,
    redirect: '/about',
  }];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  useEffect(() => {
    setLocationState(location['pathname']);
  }, [location]);

  let socials = [{
    icon: <MdWhatsapp className="icon-social" />,
    redirect: 'https://www.facebook.com/profile.php?id=100010397472525',
  }, {
    icon: <MdFacebook className="icon-social" />,
    redirect: 'https://www.facebook.com/profile.php?id=100010397472525',
  }, {
    icon: <TbBrandInstagram className="icon-social" />,
    redirect: 'https://www.facebook.com/profile.php?id=100010397472525',
  },
  {
    icon: <TbBrandTiktok className="icon-social" />,
    redirect: 'https://www.facebook.com/profile.php?id=100010397472525',
  }];

  return (
    <header
      className={`${bg ? "container-main-opacity " : "container-main-not-opacity "
        } container-main`}
    >
      <div className="container-sub-main">
        <div className="container-start">

        </div>
        <div className="container-enter">
          <img onClick={() => {
            navigate('/home');
            scroll.scrollToTop();
          }} className="logo" src={logo} alt="Logo" />
        </div>
        <div className="container-end">
          {socials.map((item, index) => (
            <Link key={index} to={item['redirect']} target="_blank"
              onClick={(event) => {
                event.preventDefault();
                window.open(item['redirect'])
              }}
            >
              {item['icon']}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-option">
        <nav className='listMenu'>
          <ul>
            {itemMenu.map((item, index) => (
              <React.Fragment key={index}>
                {locationState.search(item['redirect']) !== -1 ? (
                  <li className="not-selected">
                    {item['name']}
                  </li>
                ) : (
                  <li className="selected" onClick={() => {
                    navigate(item['redirect']);
                    scroll.scrollToTop();
                  }}>
                    {item['name']}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};