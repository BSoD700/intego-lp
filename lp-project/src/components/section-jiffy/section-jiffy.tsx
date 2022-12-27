import React, { FC } from 'react';
import './section-jiffy.scss';
import cardTrash from '@/assets/images/card-trash.png';
import cardFile from '@/assets/images/card-file.png';
import cardMac from '@/assets/images/card-mac.png';

interface SectionJiffyProps {}

interface card {
    title: string;
    paragraph: string;
    img: string;
}

const SectionJiffy: FC<SectionJiffyProps> = () => {
    const cards: card[] = [
        {
            title: 'Organize your Mac Automatically',
            paragraph:
                'Mac Washing Machine can automatically organize your heap of Desktop files into the right folders. Our Mac cleaner software also shows you which apps you use most often and allows you to drag and drop them to and from your Dock with ease.',
            img: cardMac,
        },
        {
            title: 'Wash Away Unwanted files',
            paragraph:
                'Mac Washing Machine helps clean your Mac by hunting down unwanted files, so your computer can run faster and more efficiently.',
            img: cardTrash,
        },
        {
            title: 'Get Rid of all your Duplicates files',
            paragraph:
                'Mac Washing Machine identifies duplicate, useless hangers-on and lets you get rid of them in a click, making your Mac cleaner and with more space for things that matter.',
            img: cardFile,
        },
    ];
    return (
        <div className="section-jiffy-wrapper">
            <div className="container">
                <h2>Speed Up Your Mac in a Jiffy</h2>
                <p className="subtitle">
                    Quidam officiis similique sea ei, vel tollit indoctum
                    efficiendi ei, at nihil tantas platonem eos. Mazim nemore
                    singulis an ius, nullam ornatus nam.
                </p>

                <div className="cards">
                    {cards.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`card ${index === 0 ? 'first' : ''}`}
                            >
                                <img src={item.img} alt="" />
                                <div className="card-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.paragraph}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SectionJiffy;
