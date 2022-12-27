import React, { FC, useEffect, useRef, useState } from 'react';
import Button from '../shared/Button/Button';
import Switch from '../shared/switch/switch';
import './pricing.scss';

import Select from '../shared/select/select';
import { macs } from '@/utils/macs';
import { cards } from './text';
import { currency } from '@/enums/currency.enum';
import Checkmark from '../shared/checkmark/checkmark';

interface PricingProps {}

export interface bundle {
    [key: string]: {
        [key: string]: {
            [key in currency]: string;
        };
    };
}

const Pricing: FC<PricingProps> = () => {
    // year check
    const [checked, setChecked] = useState(true);
    // prices
    const [prices, setPrices] = useState<bundle[]>([
        { original: {} },
        { offers: {} },
    ]);
    const [prices2, setPrices2] = useState<bundle[]>([
        { original: {} },
        { offers: {} },
    ]);
    // value of macs
    const [value, setValue] = useState<string>('1');
    const [value2, setValue2] = useState<string>('1');

    function handleSelect(value: string) {
        setValue(value);
    }
    function handleSelect2(value2: string) {
        setValue2(value2);
    }

    useEffect(() => {
        fetch(
            `http://localhost:3001/getPriceByBundle?bundle=bn_is_x9&year=${
                checked ? 2 : 1
            }&seats=${value}`
        )
            .then((response) => response.json())
            .then((data) => setPrices(data));
    }, [checked, value]);
    useEffect(() => {
        fetch(
            `http://localhost:3001/getPriceByBundle?bundle=bn_mpb_x9_vpn&year=${
                checked ? 2 : 1
            }&seats=${value2}`
        )
            .then((response) => response.json())
            .then((data) => setPrices2(data));
    }, [checked, value2]);

    let bundles = [
        {
            original: {},
            offers: {},
        },
        {
            original: {},
            offers: {},
        },
    ];
    // set data to original and offers
    prices.forEach((bundle) => {
        if (bundle.original) {
            console.log(' bundle.original ', bundle.original);
            bundles[0].original = bundle.original;
        } else {
            bundles[0].offers = bundle.offers;
        }
    });
    prices2.forEach((bundle) => {
        if (bundle.original) {
            console.log(' bundle.original ', bundle.original);
            bundles[1].original = bundle.original;
        } else {
            bundles[1].offers = bundle.offers;
        }
    });

    // console.log('original ', original);
    function getPrice(bundle: bundle | undefined): string {
        let price: string = '';
        if (bundle) {
            price =
                Object.values(bundle)[0] &&
                JSON.stringify(Object.values(bundle)[0]['USD']);
            console.log('price ', price && price.split('"'));
        }
        return price && price.split('"')[1];
    }
    return (
        <div className="pricing-wrapper">
            <div className="container">
                <div className="content">
                    <h3>
                        How can I get Intego <br></br>washing machine
                    </h3>
                    <p className="subtitle">
                        The Intego washing machine is included in our Mac
                        bundles. Pick the most suitable bundle that fits your
                        needs and enhances Mac security and performance.
                    </p>
                    <div className="protection">
                        <p>Period of protection:</p>
                        <div>
                            <p className="year active">1 Year</p>
                            <Switch
                                isOn={checked}
                                handleToggle={() => setChecked(!checked)}
                            />
                            <p className="year">2 Year</p>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    {cards.map((item, index) => {
                        return (
                            <div key={index} className="card">
                                {item.best ? (
                                    <div className="ribon">
                                        <p>BEST VALUE</p>
                                    </div>
                                ) : null}

                                <div className="card-header">
                                    <img src={item.imgUrl} alt="" />
                                    <h4 className="title">{item.title}</h4>
                                    <p className="subtitle">{item.subtitle}</p>
                                    {item.best ? (
                                        <Select
                                            options={macs}
                                            handleSelect={(value2: string) =>
                                                handleSelect2(value2)
                                            }
                                        />
                                    ) : (
                                        <Select
                                            options={macs}
                                            handleSelect={(value: string) =>
                                                handleSelect(value)
                                            }
                                        />
                                    )}
                                </div>
                                <div className="card-body">
                                    <div className="price">
                                        <p className="offers">
                                            {getPrice(bundles[index].offers)}
                                        </p>
                                        <p className="original">
                                            {getPrice(bundles[index].original)}
                                        </p>
                                    </div>
                                    <Button text="Buy now" link="asd"></Button>
                                </div>
                                <div className="card-footer">
                                    <h5 className="title">
                                        {item.bullets.title}
                                    </h5>
                                    <ul>
                                        {item.bullets.regular.map(
                                            (bullet, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Checkmark color="#0ADBA8"></Checkmark>
                                                        <div>
                                                            <b>
                                                                {bullet.lable}
                                                            </b>
                                                            {bullet['-']}
                                                            {bullet.text}
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        )}
                                        {item.bullets.color.map(
                                            (bullet, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className={`color ${
                                                            item.best
                                                                ? 'best'
                                                                : ''
                                                        }`}
                                                    >
                                                        <Checkmark color="#0ADBA8"></Checkmark>
                                                        <div>
                                                            <b>
                                                                {bullet.lable}
                                                            </b>
                                                            &nbsp;-&nbsp;
                                                            {bullet.text}
                                                        </div>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
