import React, { FC, useState } from 'react';
import './Menu.scss';
import hamburger from '@/assets/images/hamburger.png';
import exit from '@/assets/images/hamburger-exit.png';
import NavbarContent from '../Navbar/Content/Content';

interface MenuProps { }

const Menu: FC<MenuProps> = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
    <>
      <div className={`menu-wrapper ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar} >
        <img src={hamburger} alt="hamburger" className='hamburger' />
        <img src={exit} alt="hamburger" className='hamburger' />
      </div>
      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className="sb-body">
          <NavbarContent mobile={true}></NavbarContent>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </>
  )
}

export default Menu;
