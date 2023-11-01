import React, { useState, useEffect } from 'react';
import exampleImage2 from './image/Property 1=Frame 2.png';
import exampleImage3 from './image/Property 1=Frame 3.png';
import exampleImage4 from './image/Property 1=Frame 4.png';
import exampleImage5 from './image/Property 1=Frame 5.png';
import exampleImage6 from './image/Property 1=Frame 6.png';
import exampleImage7 from './image/Property 1=Frame 7.png';
import exampleImage8 from './image/Property 1=Frame 8.png';
import exampleImage9 from './image/Property 1=Frame 9.png';
import video from './image/FakeBand CLIP v3 (1).mp4';

import './main.css';
import ReactPlayer from 'react-player';


function Main() {

    const images = [exampleImage2, exampleImage3, exampleImage4, exampleImage5, exampleImage6, exampleImage7, exampleImage8, exampleImage9];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

        return () => clearTimeout(interval);
    }, [currentImageIndex, images.length]);


    const [showVideo, setShowVideo] = useState(false);

    const handleMouseOver = () => {
        setShowVideo(true);
    };

    const handleMouseOut = () => {
        setShowVideo(false);
    };
    return (
        <section className="main">
            <h1 className='main__text'>FAKE BAND</h1>
            <p className='main__par'>OFFICIAL SITE</p>
            <div className='main__promo-container'>
                <a
                    href='https://www.youtube.com/watch?v=76kOHCdbBrU'
                    className='main__promo'
                    target="_blank"
                    rel="noreferrer"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>PROMO

                </a>
                <img className='main__promo-frame' src={images[currentImageIndex]} alt='компоненты для визуализации' />
                <div className={`main__promo-video ${showVideo ? 'show' : ''}`}>
                    <ReactPlayer

                        url={video}
                        playing={true}
                        loop={true}
                        muted={true}
                        controls={false}
                        width= '440'
                        height= '248'
                        playsinline
                    ></ReactPlayer>
                </div>

            </div>

            <ul className='main__socials'>
                <li className='main__socials-link'> <a className='main__socials-lin-text' href='https://vk.com/fake__band' target="_blank" rel="noreferrer">VK</a></li>
                <li className='main__socials-link'><a className='main__socials-lin-text' href='https://youtube.com/@Fakeband_official?si=1Y9E_Gd9u2WvMqBd' target="_blank" rel="noreferrer">YOUTUBE</a></li>
                <li className='main__socials-link'><a className='main__socials-lin-text' href='https://www.instagram.com/fakeband_official' target="_blank" rel="noreferrer">INSTAGRAM</a></li>
            </ul>

            <ul className='main__contact'>
                <li className='main__socials-link'> <a className='main__contact-tel' href='tel:+79779329001' target="_blank" rel="noreferrer">+7 977 932-90-01</a></li>
                <li className='main__socials-link'><a className='main__contact-lin-text' href='https://wa.me/79834065617' target="_blank" rel="noreferrer">WHATSAPP</a></li>
                <li className='main__socials-link'><a className='main__contact-lin-text' href='https://t.me/Timurchikss' target="_blank" rel="noreferrer">TELEGRAM</a></li>
            </ul>
        </section>
    );
}

export default Main;