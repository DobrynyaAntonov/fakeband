import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Header from './Header';
import image from './image/IMG_2477-min.png';
import image2 from './image/imgonline-com-ua-Blur-oA2GPjnu1b-min.jpg';
import './main.css';


function Main() {
    return (
        <div className="main">
            <Header />
            <img src={image} className="main__image" alt="фото музыкальной группы Fake band" />
            <div className='main__image-container'>
                <img src={image2} className="main__image2" alt="кавер группа fake band" />
                <p className='main__text'>МОЛОДОСТЬ!</p>
                <p className='main__text2'>СТИЛЬ!</p>
                <p className='main__text3'>ДРАЙВ!</p>
                <div className='main__iframe'>
                    < ReactPlayer url='https://www.youtube.com/watch?v=76kOHCdbBrU' controls={true} width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
}

export default Main;
