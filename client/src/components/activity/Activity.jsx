import React from 'react';
import tp8 from '../../assets/img/tp8.png'
import ac1 from '../../assets/img/ac1.png'
import ac2 from '../../assets/img/ac2.png'
import ac3 from '../../assets/img/ac3.png'
import ac4 from '../../assets/img/ac4.png'
import ac5 from '../../assets/img/ac5.png'
import ac6 from '../../assets/img/ac6.png'
import ac7 from '../../assets/img/ac7.png'
import ac8 from '../../assets/img/ac8.png'


const Activity = () => {

    return (
<div className="activity">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 menu-ord">
                <div className="activity__card">
                    <img src={tp8} alt="Activ" className="activity__img"/>
                        <div className="activity__block">
                            <div className="activity__data">
                                <h4 className="activity__title">Monica Lucas</h4>
                                <p className="activity__follow">started following<span> Gayle Hicks</span></p>
                                <p className="activity__date">At 2:30 PM on 19th June, 2021</p>
                            </div>
                            <div className="activity__ic">
                                <img src={ac1} alt="Icon"/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="activity__wrap">
                    <div className="activity__search d-flex">
                        <input type="text" className="activity__input" placeholder="Enter your word art"/>
                            <button className="activity__button"><i className="fas fa-search"></i></button>
                    </div>
                    <h4 className="activity__filter">Filter</h4>
                    <div className="activity__items">
                        <div className="activity__item">
                            <img src={ac2} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Listings</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac4} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Like</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac3} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Purchases</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac6} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Sales</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac7} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Transfer</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac8} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Burns</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac5} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Bids</p>
                        </div>
                        <div className="activity__item">
                            <img src={ac1} alt="Filt" className="activity__icon"/>
                                <p className="activity__name">Followings</p>
                        </div>
                    </div>
                    <button className="activity__btn">Clear All Filters</button>
                </div>
            </div>
        </div>
    </div>
</div>
);
    };
    export default Activity;
