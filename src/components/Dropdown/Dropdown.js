import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

import { useTranslation } from 'react-i18next';
// import { Transition } from 'react-transition-group';

// import { BsList } from 'react-icons/bs';
// import { BsXLg } from 'react-icons/bs';


import { ReactComponent as MobileClose } from './../../images/mobile-menu/close_40px.svg';
import { ReactComponent as MobileMenu } from './../../images/mobile-menu/menu_40px.svg';

import { ReactComponent as Envelope } from './../../images/svg1/envelope (hover).svg';
import { ReactComponent as Smartphone } from './../../images/svg1/smartphone.svg';

const Dropdown = () => {
   const [t, i18n] = useTranslation('global');
  const [visible, setState] = useState(false)
  // const [isOpen, setOpen] = useState()
  // state = {
  //   visible: false,
  // };


  const toggle = () => {
    setState((!visible));
  };


  // render() {
  return (
    // <Transition in={isOpen} timeout={300}>
      // {state => (
        <div className="Dropdown">
          {/* <div className={ Active ? 'Dropdown__active' : 'Dropdown__menu'}> */}
          <button type="button" className="Dropdown__toggle" onClick={toggle}>
            {visible ? (
              <MobileClose className="icon-close" />
            ) : (
              <MobileMenu className="icon-menu" />
            )}
          </button>
          {visible && (
            <div className="Dropdown__menu">
              <nav className="header-nav">
                <ul className="Dropdown__top">
                  <li className="menu__item current">
                    <Link to="/">
                      {t('header.home')}
                      {/* Studio */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/portfolio">
                      {t('header.portfolio')}
                      {/* Portfolio */}
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a href="!#">
                      {t('header.contacts')}
                      {/* Contacts */}
                    </a>
                  </li>
                </ul>

                <ul class="Dropdown-contacts">
                  <li>
                    <a
                      className="contacts__link contacts__icon"
                      href="mailto:info@example.com"
                    >
                      <Envelope className="contacts__svg-envelope" />
                      info@example.com
                    </a>
                  </li>

                  <li>
                    <a
                      className="contacts__link contacts__icon"
                      href="tel:+380961111111"
                    >
                      <Smartphone className="contacts__svg" />
                      +38 096 111 11 11
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          {/* </div> */}
        </div>
      )}
  //   </Transition>
  // );
  // }
// }

export default Dropdown;