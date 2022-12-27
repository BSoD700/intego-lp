import React from 'react';
import './assets/styles/index.scss';
import Jumbo from './components/jumbo/jumbo';
import Pricing from './components/pricing/pricing';
import SectionJiffy from './components/section-jiffy/section-jiffy';
import SectionPref from './components/section-pref/section-pref';
import TrustCarusel from './components/trust-carusel/trust-carusel';
import Navbar from './layouts/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Jumbo></Jumbo>
            <div className="body">
                <SectionJiffy></SectionJiffy>
                <SectionPref></SectionPref>
                <Pricing></Pricing>
                <TrustCarusel></TrustCarusel>
            </div>
        </div>
    );
}

export default App;
