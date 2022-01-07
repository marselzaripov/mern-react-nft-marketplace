import React from 'react';

const Details = () => {
    return (
        <div className="details">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 col-xl-6">
                        <img src="img/tp5.png" alt="Details" className="details__img"/>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="details__block">
                            <h3 className="details__title">“The Fantasy Flower illustration ”</h3>
                            <div className="details__data">
                                <div className="details__indicators">
                                    <div className="details__indicator">
                                        <img src="img/wt.svg" alt="Watch" className="details__icon"/>
                                            225
                                    </div>
                                    <div className="details__indicator">
                                        <img src="img/ht.png" alt="Like" className="details__icon"/>
                                            100
                                    </div>
                                </div>
                                <div className="details__indicators">
                                    <div className="details__send">
                                        <img src="img/send2.svg" alt="Send"/>
                                    </div>
                                    <ul className="details__send">
                                        <li className="details__item"></li>
                                        <li className="details__item"></li>
                                        <li className="details__item"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="details__autors">
                                <div className="details__autor">
                                    <img src="img/av1.png" alt="Ic" className="details__av"/>
                                        <div className="details__info">
                                            <p className="details__by">Owned By</p>
                                            <p className="details__name">Ralph Garraway</p>
                                        </div>
                                </div>
                                <div className="details__autor">
                                    <img src="img/av2.png" alt="Ic" className="details__av"/>
                                        <div className="details__info">
                                            <p className="details__by">Create By</p>
                                            <p className="details__name">Freddie Carpenter</p>
                                        </div>
                                </div>
                            </div>
                            <p className="details__text">Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
                                ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum vitae ipsum
                                malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar dolor non ultrices
                                eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum</p>
                            <div className="details__dates">
                                <div className="details__date">
                                    <p className="details__proc">Current Bid</p>
                                    <p className="details__num">4.89 eTH <span>= $12.246</span></p>
                                </div>
                                <div className="details__date">
                                    <p className="details__proc">Countdown</p>
                                    <p className="details__num">04 : 23 : 10 : 39</p>
                                </div>
                            </div>
                            <button className="details__button"><img src="img/bag.svg" alt="Bag"/>Place a bid</button>
                            <div className="details__tabs">
                                <div className="details__btns" id="details__btns">
                                    <div className="details__btn details__btna" data-btn="1">Bid History</div>
                                    <div className="details__btn" data-btn="2">Info</div>
                                    <div className="details__btn" data-btn="3">Provenance</div>
                                </div>
                                <div className="details__contents">
                                    <div className="details__content details__active" data-block="1">
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt1.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>place a bid
                                                    </p>
                                                    <p className="details__time">8 hours ago</p>
                                                </div>
                                                <div className="details__right">
                                                    <p className="details__many">4.89 ETH</p>
                                                    <p className="details__dollar">= $12.246</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt2.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>bid accepted
                                                    </p>
                                                    <p className="details__time">at 06/10/2021, 3:20 AM</p>
                                                </div>
                                                <div className="details__right">
                                                    <p className="details__many">4.89 ETH</p>
                                                    <p className="details__dollar">= $12.246</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt3.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>place a bid
                                                    </p>
                                                    <p className="details__time">8 hours ago</p>
                                                </div>
                                                <div className="details__right">
                                                    <p className="details__many">4.89 ETH</p>
                                                    <p className="details__dollar">= $12.246</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details__content" data-block="2">
                                        <div className="details__inf">
                                            <p className="details__infname">NFT ID</p>
                                            <p className="details__infdata">165811</p>
                                        </div>
                                        <div className="details__inf">
                                            <p className="details__infname">MINT TRANSACTION</p>
                                            <p className="details__infdata">0.5 ETH</p>
                                        </div>
                                        <div className="details__inf">
                                            <p className="details__infname">CONTRACT ADDRESS</p>
                                            <p className="details__infdata">0x1e86b43665d6cbf3101f</p>
                                        </div>
                                    </div>
                                    <div className="details__content" data-block="3">
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt1.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>was listed
                                                    </p>
                                                    <p className="details__time">8 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt2.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>was minted
                                                    </p>
                                                    <p className="details__time">at 06/10/2021, 3:20 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="details__wrap">
                                            <div className="details__avatar">
                                                <img src="img/dt3.png" alt="AVATAR"/>
                                                    <i className="fas fa-check"></i>
                                            </div>
                                            <div className="details__activity">
                                                <div className="details__left">
                                                    <p className="details__bit"><span>Mason Woodward </span>place a bid
                                                    </p>
                                                    <p className="details__time">at 02/10/2021, 16:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

