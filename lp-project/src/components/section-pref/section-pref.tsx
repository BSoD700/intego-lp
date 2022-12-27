import React, { FC } from 'react';
import './section-pref.scss';
import pref from '@/assets/images/pref.png';

interface SectionPrefProps {}

const SectionPref: FC<SectionPrefProps> = () => (
    <div className="section-pref-wrapper">
        <div className="container">
            <div className="content">
                <h2>
                    Enhance your Mac <br></br>Performance Today!
                </h2>
                <p className="subtitle">
                    Quidam officiis similique sea ei, vel tollit indoctum
                    efficiendi ei, at nihil tantas platonem eos. Mazim nemore
                    singulis an ius, nullam ornatus nam ei.
                </p>
                <div className="blocks">
                    <div className="block">
                        <h3>3GB</h3>
                        <p>of Free Space cleaned</p>
                    </div>
                    <div className="block">
                        <h3>30%</h3>
                        <p>Increase in your Mac Boot-time Speed</p>
                    </div>
                    <div className="block">
                        <h3>3X</h3>
                        <p>More Responsive Apps</p>
                    </div>
                </div>
            </div>
            <img src={pref} alt="pref" className="pref" />
        </div>
    </div>
);

export default SectionPref;
