import React, { FC } from 'react';
import logo from '@/assets/images/logo/logo.png';
import './navbar.scss';
import Button from '@/components/shared/Button/Button';
import shopping from '@/assets/images/shopping.svg';
import Menu from '../Menu/Menu';
import NavbarContent from './Content/Content';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
    <div
        data-testid="Navbar"
        className="navbar-wrapper align-center d-flex justify-between"
    >
        <div className="align-center d-flex justify-center">
            <a href="/">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <NavbarContent mobile={false}></NavbarContent>
        </div>
        <div className="button-container d-flex align-center">
            <Button
                text="Store"
                link="asd"
                theme="nav"
                icon={shopping}
            ></Button>
            <div className="menu">
                <Menu></Menu>
            </div>
        </div>
    </div>
);

export default Navbar;
