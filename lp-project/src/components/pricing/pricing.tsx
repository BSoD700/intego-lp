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
    // macValue of macs
    const [macValue, setmacValue] = useState<string>('1');
    const [macValue2, setmacValue2] = useState<string>('1');

    function handleSelect(macValue: string) {
        setmacValue(macValue);
    }
    function handleSelect2(macValue2: string) {
        setmacValue2(macValue2);
    }
    // handle price values with year checked and listboxs
    HandleUseEffect(checked, macValue2, 'bn_mpb_x9_vpn', setPrices2);
    HandleUseEffect(checked, macValue, 'bn_is_x9', setPrices);

    function HandleUseEffect(
        checked: boolean,
        macValue: string,
        bundleID: string,
        setPriceBundel: any
    ): void {
        useEffect(() => {
            fetch(
                `http://localhost:3001/getPriceByBundle?bundle=${bundleID}&year=${
                    checked ? 2 : 1
                }&seats=${macValue}`
            )
                .then((response) => response.json())
                .then((data) => setPriceBundel(data));
        }, [checked, macValue, bundleID, setPriceBundel]);
    }
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
            bundles[0].original = bundle.original;
        } else {
            bundles[0].offers = bundle.offers;
        }
    });
    prices2.forEach((bundle) => {
        if (bundle.original) {
            bundles[1].original = bundle.original;
        } else {
            bundles[1].offers = bundle.offers;
        }
    });

    function getPrice(bundle: bundle | undefined): string {
        let price: string = '';
        if (bundle) {
            price =
                Object.values(bundle)[0] &&
                JSON.stringify(Object.values(bundle)[0]['USD']);
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
                                        <p>BEST macValue</p>
                                    </div>
                                ) : null}

                                <div className="card-header">
                                    <img src={item.imgUrl} alt="" />
                                    <h4 className="title">{item.title}</h4>
                                    <p className="subtitle">{item.subtitle}</p>
                                    {item.best ? (
                                        <Select
                                            options={macs}
                                            handleSelect={(macValue2: string) =>
                                                handleSelect2(macValue2)
                                            }
                                        />
                                    ) : (
                                        <Select
                                            options={macs}
                                            handleSelect={(macValue: string) =>
                                                handleSelect(macValue)
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
