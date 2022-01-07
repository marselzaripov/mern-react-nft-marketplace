import React, {useState} from 'react';
//import './navbar1.css'
import Logo from '../../assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {getFiles, searchFiles} from "../../actions/file";
import {showLoader} from "../../reducers/appReducer";
import avatarLogo from '../../assets/img/avatar.svg'
import {API_URL} from "../../config";
import logo from '../../assets/img/logo.png'
import createnft from '../../assets/img/cr.svg'
import lg from '../../assets/img/lg.png'
import fc from '../../assets/img/fc.png'
import '../main.js';
import '../author.js';
import '../contact.js';
import '../details.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const Navbar = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const currentDir = useSelector(state => state.files.currentDir)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if(e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }



    return (
        <div className="secondary">
            <div className="nav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-3 d-xl-none">
                            <button className="nav__open">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className="col-lg-2 offset-lg-3 offset-xl-0 col-4 offset-1">
                            <a href="index.html" className="nav__logo">
                                <img src={logo} alt="Axies"/>
                            </a>
                        </div>
                        <div className="col-lg-6 d-none menu-op d-xl-block">
                            <i className="fas fa-times nav__close d-xl-none"></i>
                            <ul className="nav__menu d-xl-flex">
                                <li className="nav__link">
                                    <a href="/explore" className="nav__head">Home</a>
                                </li>
                                {/*<li className="nav__link">*/}
                                {/*    <button className="nav__head nav__head_ls" data-btn="1">Explore <i*/}
                                {/*        className="fas fa-angle-down" data-btn="1"></i></button>*/}
                                {/*    <ul className="nav__minmenu d-none" data-content="1">*/}
                                {/*        <li className="nav__minlink"><a href="explore.html">Explore Style 1</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="">Explore Style 2</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="">Explore Style 3</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="">Explore Style 4</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="auctions.html">Live Auctions</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="details.html">Item Details</a></li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                                <li className="nav__link">
                                    <a href="/explore" className="nav__head">Explore</a>
                                </li>
                                <li className="nav__link">
                                    <a href="/activity" className="nav__head">Activity</a>
                                </li>
                                {/*<li className="nav__link">*/}
                                {/*    <button className="nav__head nav__head_ls" data-btn="2">Community <i*/}
                                {/*        className="fas fa-angle-down" data-btn="2"></i></button>*/}
                                {/*    <ul className="nav__minmenu d-none" data-content="2">*/}
                                {/*        <li className="nav__minlink"><a href="blog.html">Blog</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="single.html">Blog Single</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="help.html">Help Center</a></li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                                <li className="nav__link">
                                    <a href="/blog" className="nav__head">Community</a>
                                </li>
                                <li className="nav__link">
                                    <a href="/creators" className="nav__head">Authors</a>
                                </li>
                                {/*<li className="nav__link">*/}
                                {/*    <button className="nav__head nav__head_ls" data-btn="3">Pages <i*/}
                                {/*        className="fas fa-angle-down" data-btn="3"></i></button>*/}
                                {/*    <ul className="nav__minmenu d-none" data-content="3">*/}
                                {/*        <li className="nav__minlink"><a href="authors.html">Authors</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="author.html">Author</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="wallet.html">Wallet Connect</a></li>*/}
                                {/*        <li className="nav__minlink"><a href="create.html">Create</a></li>*/}
                                {/*    </ul>*/}
                                {/*</li>*/}
                                <li className="nav__link">
                                    <a href="/contacts" className="nav__head">Contact</a>
                                </li>
                                <button className="nav__search d-xl-none">
                                    <FontAwesomeIcon icon="search" />
                                </button>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-4">
                            {!isAuth &&  <div className="navbar__login"><a href={"/login"}>
                               <button className="nav__create d-none d-lg-block">Login</button></a>
                            </div>}

                            {isAuth &&
                            <div className="nav__block">
                                <button className="nav__search d-xl-block d-none">
                                    <i className="fa fa-search"></i>
                                </button>
                                <a href={"/createnft"}>
                                <button className="nav__create d-none d-lg-block">
                                    <img src={createnft} alt="Create" className="nav__ic"/>
                                        Create
                                </button>
                                </a>

                                {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }>Exit</div> }
                                <button className="nav__ms">
                                    <img src={lg} alt="LG" className="nav__lg"/>
                                        <p className="nav__num">2</p>
                                </button>
                                <p className="nav__many d-none d-lg-block">21.0064 ETH</p>
                                <div className="nav__pf">
                                    <a href="/profile"><img src={fc} alt="fc" className="nav__fc"/></a>
                                        <ul className="nav__prof d-none">
                                            <li className="nav__funk d-lg-none">
                                                <p className="nav__many">21.0064 ETH</p>
                                                <button className="nav__create">
                                                    <img src="img/cr.svg" alt="Create" className="nav__ic"/>
                                                </button>
                                            </li>
                                            <li className="nav__funk">
                                                <p className="nav__text nav__text_it">My items</p>
                                                <img src="img/pf1.png" alt="Pf" className="nav__img"/>
                                            </li>
                                            <li className="nav__funk">
                                                <a href="profile.html">
                                                    <p className="nav__text">Edit profile</p>
                                                    <img src="img/pf2.png" alt="Pf" className="nav__img"/>
                                                </a>
                                            </li>
                                            <li className="nav__funk">
                                                <p className="nav__text nav__text_dc">Disconnect</p>
                                                <img src="img/pf3.png" alt="Pf" className="nav__img"/>
                                            </li>
                                        </ul>
                                </div>
                            </div>}
                        </div>

                    </div>
                </div>
            </div>
            <header className="header second">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="second__title">Test</h2>
                            <ul className="second__list d-flex">
                                <li className="second__item second__item_def"><a href="index.html">Home</a></li>
                                <li className="second__item second__item_def second__item_sl">/</li>
                                <li className="second__item second__item_def"><a href="#">Auctions</a></li>
                                <li className="second__item second__item_def second__item_sl">/</li>
                                <li className="second__item">Test</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>



        // <div className="navbar">
        //     <div className="container">
        //         <img src={Logo} alt="" className="navbar__logo"/>
        //         <div className="navbar__header">MERN CLOUD</div>
        //         {isAuth && <input
        //             value={searchName}
        //             onChange={e => searchChangeHandler(e)}
        //             className='navbar__search'
        //             type="text"
        //             placeholder="Название файла..."/>}
        //         {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div> }
        //         {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div> }
        //         {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }>Выход</div> }
        //         {isAuth && <NavLink to='/profile'>
        //             <img className="navbar__avatar" src={avatar} alt=""/>
        //         </NavLink>}
        //     </div>
        // </div>
    );
};



export default Navbar;
