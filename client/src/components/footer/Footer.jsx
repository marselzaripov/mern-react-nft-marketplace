import React from 'react';
import logof from '../../assets/img/logof.png'
import send from '../../assets/img/send.png'
import sc1 from '../../assets/img/sc1.png'
import sc2 from '../../assets/img/sc2.png'

const Footer = () => {


    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-6 col-12">
                        <a href="index.html" className="footer__logo">
                            <img src={logof} alt="Axies"/>
                        </a>
                        <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non,
                            fugit totam vel laboriosam vitae.</p>
                        <ul className="footer__socs d-flex">
                            <li className="footer__item">
                                <a href="#" className="footer__soc">
                                    <img src={sc1} alt="Fb"/>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__soc">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__soc">
                                    <i className="fab fa-google"></i>
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__soc">
                                    <img src={sc2} alt="Sc"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-4 menu-ord">
                        <div className="footer__block">
                            <h6 className="footer__title">My Account</h6>
                            <ul className="footer__menu">
                                <li className="footer__link">
                                    <a href="#">Authors</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Collection</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Author Profile</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Create Collection</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-4 menu-ord">
                        <div className="footer__block">
                            <h6 className="footer__title">Resources</h6>
                            <ul className="footer__menu">
                                <li className="footer__link">
                                    <a href="#">Help & Support</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Live Auctions</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Item Details</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Activity</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-4 menu-ord">
                        <div className="footer__block">
                            <h6 className="footer__title">Company</h6>
                            <ul className="footer__menu">
                                <li className="footer__link">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Contact Us</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Our Blog</a>
                                </li>
                                <li className="footer__link">
                                    <a href="#">Discover</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 offset-md-3 offset-lg-0 col-sm-6 col-12">
                        <form className="footer__form" method='POST' action=''>
                            <h5 className="footer__title">Subscribe Us</h5>
                            <div className="footer__wrap d-flex">
                                <input type="email" name="email" className="footer__input"
                                       placeholder="Info@yourgmail.com" required/>
                                    <button className="footer__btn" type="submit">
                                        <img src={send} alt="Send" className="footer__send"/>
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;