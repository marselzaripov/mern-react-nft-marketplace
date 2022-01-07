import React from 'react';
import pc7 from '../../assets/img/pc7.png'
import pc6 from '../../assets/img/pc6.png'
import pc5 from '../../assets/img/pc5.png'
import pc4 from '../../assets/img/pc4.png'
import pc1 from '../../assets/img/pc1.png'

const Creators = () => {
    return (

        <div className="creator">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="creator__title">Our Creator</h3>
                    </div>
                    <div className="col-md-4">
                        <div className="popular__block creator__block">
                            <div className="popular__top creator__top">
                                <div className="popular__wrap">
                                    <div className="popular__avatar">
                                        <img src={pc1} alt="AVA" className="popular__ic"/>
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="popular__data">
                                        <h5 className="popular__name">Ralph Garraway</h5>
                                        <p className="creator__text">12 item products</p>
                                    </div>
                                </div>
                                <button className="creator__btn">Following</button>
                            </div>
                            <div className="popular__bottom">
                                <img src={pc4} alt="Creat" className="popular__img"/>
                                <div className="popular__imgs">
                                    <div className="popular__mini">
                                        <img src={pc5} alt="Creat" className="popular__m-img"/>
                                        <img src={pc6} alt="Creat" className="popular__m-img"/>
                                    </div>
                                    <img src={pc7} alt="Creat" className="popular__b-img"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <button className="today__btn creator__button">Load More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Creators;