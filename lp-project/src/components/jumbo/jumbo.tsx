import React, { FC } from 'react';
import Button from '../shared/Button/Button';
import './jumbo.scss';
import bg from '@/assets/images/jumbo-bg.png';
import jumboImg from '@/assets/images/jumbo.png';
import mac from '@/assets/images/mac.png';

interface JumboProps {}

const Jumbo: FC<JumboProps> = () => (
    <div className="jumbo-wapper" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
            <div className="content">
                <h1>Intego Washing Machine</h1>
                <h2>
                    Advanced <br></br>Mac cleaner
                </h2>
                <p className="sub">
                    Mac Washing Machine is a Mac cleaner that makes it easy to
                    get rid of junk files that slow down your Mac—duplicate
                    files and programs you never use.
                </p>
                <Button text="Buy now" link="asd"></Button>
                <div className="sub-button">
                    <div className="mac">
                        <img src={mac} alt="mac" />
                        <span>Compatible with macOS Monterey!</span>
                    </div>
                    <a href="/" className="system">
                        System Requirements
                    </a>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={jumboImg} alt="jumbo" />
            </div>
        </div>
    </div>
);

export default Jumbo;
