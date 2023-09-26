import Header from './Header';
import image from './image/IMG_2477-min.png';
import image2 from './image/imgonline-com-ua-Blur-oA2GPjnu1b-min.jpg';
import './main.css';


function Main() {
    return (
        <div className="Main">
               <Header />
            <img src={image} className="main__image" alt="фото музыкальной группы Fake band" />
            <img src={image2} className="main__image2" alt="кавер группа fake band" />
         
        </div>
    );
}

export default Main;
