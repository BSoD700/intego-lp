import React, { FC } from 'react';
import NavbarProducts from '../Products/Products';
import './Content.scss';
import account from '@/assets/images/account.svg';

interface NavbarContentProps {
    mobile: Boolean;
}

const NavbarContent: FC<NavbarContentProps> = ({ mobile }) => (
    <div className={`content-wrapper ${!mobile ? '' : 'mobile'}`}>
        <div className="content">
            <div className="link">
                <NavbarProducts></NavbarProducts>
            </div>
            <div className="link">
                <a href="/">For Business</a>
            </div>
            <div className="link">
                <a href="/">Blog</a>
            </div>
            <div className="link">
                <a href="/">Support</a>
            </div>
        </div>
        <div className="account-wrapper">
            <a href="/" className="account d-flex align-center">
                <img src={account} alt="logo" />
                <span>My Account</span>
            </a>
        </div>
    </div>
);

export default NavbarContent;
