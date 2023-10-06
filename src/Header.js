import React, { useState, useEffect } from 'react';
import './header.css';
import { useMediaQuery } from 'react-responsive';
import youtubeIcon from './image/youtube-168-svgrepo-com.svg';
import vkIcon from './image/vk-svgrepo-com.svg';
import instagramIcon from './image/instagram-167-svgrepo-com.svg';
import contact from './image/free-icon-contact-us-8644324.png';
import close from './image/1486564399-close_81512.png';
import telegramMobile from './image/telegram_logo_icon_168692.png';
import phoneMobile from './image/phone_14179.png';
import whatsApp from './image/whatsapp_logo_icon_186881.png';
import youtubeMobile from './image/youtube_logo_icon_168737.png';
import vkMobile from './image/iconfinder-social-media-applications-32vk-4102593_113806.png';
import instMobile from './image/3721672-instagram_108066.png';

function Header() {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        // Проверьте ширину экрана при монтировании компонента
        if (!isMobile) {
            setIsMenuOpen(true)
        } else {
            setIsMenuOpen(false)
        }
    }, [isMobile]);


    // Функция для открытия/закрытия меню при клике на кнопку
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">

            <div className="header__container">
                <div className="header__menu">
                    <a href="https://www.youtube.com/watch?v=76kOHCdbBrU" className="header__promo" target="_blank" rel="noopener noreferrer">PROMO</a>
                    <div className="header__navtab">
                        <a href="https://www.youtube.com/@Fakeband_official" target="_blank" rel="noopener noreferrer">
                            {isMobile ? (
                                <img className="header__icon-you" src={youtubeMobile} alt="YouTube" />
                            ) : (
                                <img className="header__icon" src={youtubeIcon} alt="YouTube" />
                            )}
                        </a>
                        <a href="https://vk.com/fake__band" target="_blank" rel="noopener noreferrer">
                            {isMobile ? (
                                <img className="header__icon-vk" src={vkMobile} alt="VKontakte" />
                            ) : (
                                <img className="header__icon" src={vkIcon} alt="VKontakte" />
                            )}
                        </a>
                        <a href="https://instagram.com/fakeband_official?igshid=MWZjMTM2ODFkZg==" target="_blank" rel="noopener noreferrer">
                            {isMobile ? (
                                <img className="header__icon-inst " src={instMobile} alt="Instagram" />
                            ) : (
                                <img className="header__icon " src={instagramIcon} alt="Instagram" />
                            )}
                        </a>
                    </div>
                    <div className="header__connection">

                        <div className={`header__open ${isMenuOpen ? `visible` : ``}`}>
                            <a href="tel:+79779329001" className="header__phone">
                                {isMobile ? (
                                    <img className="header__connection-icon" src={phoneMobile} alt="иконка вызова" />
                                ) : <span className="header__phone-text">+7 (977) 932-90-01</span>}
                            </a>
                            <div className="header__socials">
                                <a className="header__connection-link" href="https://t.me/Timurchikss" target="_blank" rel="noopener noreferrer">
                                    {isMobile ? (
                                        <img className="header__connection-icon" src={telegramMobile} alt="telegram фейк бенд" />
                                    ) : (

                                        <svg className="header__connection-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                            <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z" />
                                        </svg>
                                    )}

                                </a>
                                <a className="header__connection-link" href="https://wa.me/79834065617" target="_blank" rel="noopener noreferrer">
                                    {isMobile ? (
                                        <img className="header__connection-icon what" src={whatsApp} alt="telegram фейк бенд" />
                                    ) : (
                                        <svg className="header__connection-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM24.7911 37.3525C32.6595 37.3493 39.059 30.9483 39.0621 23.0815C39.0637 19.2683 37.5806 15.6828 34.8862 12.9854C32.1918 10.2879 28.6086 8.80165 24.7909 8.8C16.9248 8.8 10.5228 15.2017 10.5196 23.0702C10.5186 25.5855 11.1757 28.0405 12.4246 30.2048L10.4 37.6L17.9653 35.6155C20.0498 36.7524 22.3967 37.3517 24.7852 37.3525H24.7911Z" fill="black" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3159 33.0319L13.8265 34.2096L15.0248 29.8324L14.7428 29.3836C13.5554 27.4951 12.9283 25.3124 12.9292 23.0711C12.9318 16.5311 18.2529 11.2104 24.7958 11.2104C27.964 11.2115 30.9422 12.4469 33.1817 14.689C35.4212 16.9311 36.6538 19.9112 36.6526 23.0807C36.6499 29.6212 31.3289 34.9424 24.7911 34.9424H24.7863C22.6578 34.9415 20.5702 34.3697 18.749 33.289L18.3159 33.0319ZM31.9808 26.4751C31.8917 26.3264 31.654 26.2372 31.2974 26.0586C30.9408 25.8801 29.1877 25.0176 28.8608 24.8985C28.534 24.7795 28.2961 24.7201 28.0585 25.0769C27.8208 25.4339 27.1374 26.2372 26.9294 26.4751C26.7214 26.7131 26.5133 26.7429 26.1569 26.5644C25.8003 26.3859 24.6513 26.0094 23.2893 24.7945C22.2292 23.8489 21.5135 22.6813 21.3055 22.3243C21.0975 21.9673 21.2834 21.7743 21.4619 21.5965C21.6223 21.4367 21.8185 21.1799 21.9968 20.9718C22.1751 20.7636 22.2345 20.6148 22.3533 20.377C22.4722 20.1389 22.4128 19.9307 22.3236 19.7522C22.2345 19.5737 21.5213 17.8185 21.2242 17.1045C20.9347 16.4092 20.6408 16.5034 20.4219 16.4924C20.2141 16.482 19.9762 16.4798 19.7385 16.4798C19.5008 16.4798 19.1144 16.569 18.7876 16.926C18.4607 17.283 17.5395 18.1457 17.5395 19.9008C17.5395 21.656 18.8173 23.3516 18.9956 23.5896C19.1739 23.8276 21.51 27.4293 25.0871 28.9739C25.9379 29.3413 26.602 29.5607 27.12 29.725C27.9742 29.9965 28.7516 29.9582 29.3659 29.8663C30.0511 29.764 31.4756 29.0038 31.7729 28.1709C32.0699 27.3378 32.0699 26.6238 31.9808 26.4751Z" fill="black" />
                                        </svg>
                                    )}

                                </a>
                            </div>

                        </div>

                        {
                            isMobile && (
                                    <img
                                        onClick={toggleMenu}
                                        className="header__contact"
                                        src={isMenuOpen ? close : contact}
                                        alt="закрыть контакты"
                                    />
                               
                            )
                        }

                    </div>
                </div>
            </div>
            <h1 className="header__title">FAKE BAND</h1>
        </header >
    );
}

export default Header;
