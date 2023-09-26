import './header.css';
import youtubeIcon from './image/youtube-168-svgrepo-com.svg';
import vkIcon from './image/vk-svgrepo-com.svg';
import instagramIcon from './image/instagram-167-svgrepo-com.svg';

function Header() {
    return (
        <header className="header">

            <div className="header__container">
                <div className="header__menu">
                    <a href="https://www.youtube.com/watch?v=76kOHCdbBrU" className="header__promo" target="_blank" rel="noopener noreferrer">PROMO</a>
                    <div className="header__navtab">
                        <a href="https://www.youtube.com/@Fakeband_official" target="_blank" rel="noopener noreferrer">
                            <img className="header__icon" src={youtubeIcon} alt="YouTube" />
                        </a>
                        <a href="https://vk.com/fake__band" target="_blank" rel="noopener noreferrer">
                            <img className="header__icon" src={vkIcon} alt="VKontakte" />
                        </a>
                        <a href="https://instagram.com/fakeband_official?igshid=MWZjMTM2ODFkZg==" target="_blank" rel="noopener noreferrer">
                            <img className="header__icon " src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                    <a href="tel:+79779329001" className="header__phone">
                    <span className="header__phone-text">+7 (977) 932-90-01</span>
                    </a>
                </div>
            </div>
            <h1 className="header__title">FAKE BAND</h1>
        </header>
    );
}

export default Header;
