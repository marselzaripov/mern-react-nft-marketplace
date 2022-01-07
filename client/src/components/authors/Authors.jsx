import React from 'react';
import pc7 from '../../assets/img/pc7.png'
import pc6 from '../../assets/img/pc6.png'
import pc5 from '../../assets/img/pc5.png'
import pc4 from '../../assets/img/pc4.png'
import pc1 from '../../assets/img/pc1.png'
import tc1 from '../../assets/img/ts1.png'
import tc2 from '../../assets/img/ts2.png'
import tc3 from '../../assets/img/ts3.png'


const Authors = () => {

    return (

        <div className="authors">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="top__title authors__title">Top Seller</h3>
                        <p className="authors__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
                            obcaecati
                            dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                    </div>
                    <div className="col-12">
                        <div className="top__slider slick-initialized slick-slider slick-dotted">
                            <button type="button" className="slick-prev slick-arrow" style=""><i
                                className="fas fa-angle-left"></i><i className="fas fa-arrow-left"></i></button>
                            <div className="slick-list draggable">
                                <div className="slick-track"
                                     style="opacity: 1; width: 5715px; transform: translate3d(-1143px, 0px, 0px);">
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-9"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts1.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Crispin Berry</h6>
                                            <p className="top__many">214.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-8"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts2.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Samson Frost</h6>
                                            <p className="top__many">205.43 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-7"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts3.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Tommy Alvarez</h6>
                                            <p className="top__many">170.3 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-6"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts4.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Windsor Lane</h6>
                                            <p className="top__many">120.7 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-5"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts5.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Andy Hurlbutt</h6>
                                            <p className="top__many">82.79 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-4"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts6.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Blake Banks</h6>
                                            <p className="top__many">68.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-3"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts7.png" alt="FC" className="top__img"/>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-2"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts8.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Matt Ramos</h6>
                                            <p className="top__many">38.4 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="-1"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts9.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Harper Wilcher</h6>
                                            <p className="top__many">29.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-current slick-active"
                                         data-slick-index="0" aria-hidden="false" tabIndex="0" role="tabpanel"
                                         id="slick-slide00" aria-describedby="slick-slide-control00"
                                         style="width: 127px;">
                                        <img src="img/ts1.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Crispin Berry</h6>
                                            <p className="top__many">214.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="1"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide01"
                                         aria-describedby="slick-slide-control01" style="width: 127px;">
                                        <img src="img/ts2.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Samson Frost</h6>
                                            <p className="top__many">205.43 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="2"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide02"
                                         aria-describedby="slick-slide-control02" style="width: 127px;">
                                        <img src="img/ts3.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Tommy Alvarez</h6>
                                            <p className="top__many">170.3 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="3"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide03"
                                         aria-describedby="slick-slide-control03" style="width: 127px;">
                                        <img src="img/ts4.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Windsor Lane</h6>
                                            <p className="top__many">120.7 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="4"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide04"
                                         aria-describedby="slick-slide-control04" style="width: 127px;">
                                        <img src="img/ts5.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Andy Hurlbutt</h6>
                                            <p className="top__many">82.79 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="5"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide05"
                                         aria-describedby="slick-slide-control05" style="width: 127px;">
                                        <img src="img/ts6.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Blake Banks</h6>
                                            <p className="top__many">68.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="6"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide06"
                                         aria-describedby="slick-slide-control06" style="width: 127px;">
                                        <img src="img/ts7.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Monica Lucas</h6>
                                            <p className="top__many">52.8 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="7"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide07"
                                         aria-describedby="slick-slide-control07" style="width: 127px;">
                                        <img src="img/ts8.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Matt Ramos</h6>
                                            <p className="top__many">38.4 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-active" data-slick-index="8"
                                         aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide08"
                                         aria-describedby="slick-slide-control08" style="width: 127px;">
                                        <img src="img/ts9.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Harper Wilcher</h6>
                                            <p className="top__many">29.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="9" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide09"
                                         aria-describedby="slick-slide-control09" style="width: 127px;">
                                        <img src="img/ts1.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Crispin Berry</h6>
                                            <p className="top__many">214.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="10" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide010"
                                         aria-describedby="slick-slide-control010" style="width: 127px;">
                                        <img src="img/ts2.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Samson Frost</h6>
                                            <p className="top__many">205.43 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="11" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide011"
                                         aria-describedby="slick-slide-control011" style="width: 127px;">
                                        <img src="img/ts3.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Tommy Alvarez</h6>
                                            <p className="top__many">170.3 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="12" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide012"
                                         aria-describedby="slick-slide-control012" style="width: 127px;">
                                        <img src="img/ts4.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Windsor Lane</h6>
                                            <p className="top__many">120.7 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="13" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide013"
                                         aria-describedby="slick-slide-control013" style="width: 127px;">
                                        <img src="img/ts5.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Andy Hurlbutt</h6>
                                            <p className="top__many">82.79 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="14" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide014"
                                         aria-describedby="slick-slide-control014" style="width: 127px;">
                                        <img src="img/ts6.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Blake Banks</h6>
                                            <p className="top__many">68.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="15" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide015"
                                         aria-describedby="slick-slide-control015" style="width: 127px;">
                                        <img src="img/ts7.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Monica Lucas</h6>
                                            <p className="top__many">52.8 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="16" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide016"
                                         aria-describedby="slick-slide-control016" style="width: 127px;">
                                        <img src="img/ts8.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Matt Ramos</h6>
                                            <p className="top__many">38.4 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide" data-slick-index="17" aria-hidden="true"
                                         tabIndex="-1" role="tabpanel" id="slick-slide017"
                                         aria-describedby="slick-slide-control017" style="width: 127px;">
                                        <img src="img/ts9.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Harper Wilcher</h6>
                                            <p className="top__many">29.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="18"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts1.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Crispin Berry</h6>
                                            <p className="top__many">214.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="19"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts2.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Samson Frost</h6>
                                            <p className="top__many">205.43 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="20"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts3.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Tommy Alvarez</h6>
                                            <p className="top__many">170.3 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="21"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts4.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Windsor Lane</h6>
                                            <p className="top__many">120.7 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="22"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts5.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Andy Hurlbutt</h6>
                                            <p className="top__many">82.79 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="23"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts6.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Blake Banks</h6>
                                            <p className="top__many">68.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="24"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts7.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Monica Lucas</h6>
                                            <p className="top__many">52.8 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="25"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts8.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Matt Ramos</h6>
                                            <p className="top__many">38.4 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="26"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts9.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Harper Wilcher</h6>
                                            <p className="top__many">29.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="27"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts1.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Crispin Berry</h6>
                                            <p className="top__many">214.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="28"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts2.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Samson Frost</h6>
                                            <p className="top__many">205.43 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="29"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts3.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Tommy Alvarez</h6>
                                            <p className="top__many">170.3 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="30"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts4.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Windsor Lane</h6>
                                            <p className="top__many">120.7 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="31"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts5.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Andy Hurlbutt</h6>
                                            <p className="top__many">82.79 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="32"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts6.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Blake Banks</h6>
                                            <p className="top__many">68.2 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="33"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts7.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Monica Lucas</h6>
                                            <p className="top__many">52.8 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="34"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts8.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Matt Ramos</h6>
                                            <p className="top__many">38.4 ETH</p>
                                    </div>
                                    <div className="top__slide slick-slide slick-cloned" data-slick-index="35"
                                         aria-hidden="true" tabIndex="-1" style="width: 127px;">
                                        <img src="img/ts9.png" alt="FC" className="top__img"/>
                                            <i className="fas fa-check"></i>
                                            <h6 className="top__name">Harper Wilcher</h6>
                                            <p className="top__many">29.2 ETH</p>
                                    </div>
                                </div>
                            </div>


                            <button type="button" className="slick-next slick-arrow" style=""><i
                                className="fas fa-angle-right"></i><i className="fas fa-arrow-right"></i></button>
                            <ul className="slick-dots" style="" role="tablist">
                                <li className="slick-active" role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control00"
                                            aria-controls="slick-slide00" aria-label="1 of 2" tabIndex="0"
                                            aria-selected="true">1
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control01"
                                            aria-controls="slick-slide01" aria-label="2 of 2" tabIndex="-1">2
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control02"
                                            aria-controls="slick-slide02" aria-label="3 of 2" tabIndex="-1">3
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control03"
                                            aria-controls="slick-slide03" aria-label="4 of 2" tabIndex="-1">4
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control04"
                                            aria-controls="slick-slide04" aria-label="5 of 2" tabIndex="-1">5
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control05"
                                            aria-controls="slick-slide05" aria-label="6 of 2" tabIndex="-1">6
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control06"
                                            aria-controls="slick-slide06" aria-label="7 of 2" tabIndex="-1">7
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control07"
                                            aria-controls="slick-slide07" aria-label="8 of 2" tabIndex="-1">8
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control08"
                                            aria-controls="slick-slide08" aria-label="9 of 2" tabIndex="-1">9
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control09"
                                            aria-controls="slick-slide09" aria-label="10 of 2" tabIndex="-1">10
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control010"
                                            aria-controls="slick-slide010" aria-label="11 of 2" tabIndex="-1">11
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control011"
                                            aria-controls="slick-slide011" aria-label="12 of 2" tabIndex="-1">12
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control012"
                                            aria-controls="slick-slide012" aria-label="13 of 2" tabIndex="-1">13
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control013"
                                            aria-controls="slick-slide013" aria-label="14 of 2" tabIndex="-1">14
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control014"
                                            aria-controls="slick-slide014" aria-label="15 of 2" tabIndex="-1">15
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control015"
                                            aria-controls="slick-slide015" aria-label="16 of 2" tabIndex="-1">16
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control016"
                                            aria-controls="slick-slide016" aria-label="17 of 2" tabIndex="-1">17
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button type="button" role="tab" id="slick-slide-control017"
                                            aria-controls="slick-slide017" aria-label="18 of 2" tabIndex="-1">18
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Authors;