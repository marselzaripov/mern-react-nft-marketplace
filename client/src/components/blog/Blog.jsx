import React from 'react';
import nw5 from '../../assets/img/nw5.jpg'
import la11 from '../../assets/img/la11.png'

const Blog = () => {


    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 col-12">
                        <div className="blog__card">
                            <img src={nw5} alt="New" className="blog__img"/>
                                <div className="blog__data">
                                    <div className="blog__autor">
                                        <img src={la11} alt="Autor" className="blog__ic"/>
                                            <div className="blog__wrap">
                                                <p className="blog__owner">Post owner</p>
                                                <p className="blog__name">SalvadorDali</p>
                                            </div>
                                    </div>
                                    <p className="blog__date">Feb 19, 2021</p>
                                </div>
                                <h4 className="blog__title">The next big trend in crypto</h4>
                                <p className="blog__text">Dolore officia sint incididunt non excepteur ea mollit commodo
                                    ut
                                    enim reprehenderit cupidatat labore ad laborum consectetur
                                    consequat...</p>
                                <a href="#" className="blog__btn">Read more</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="today__btn">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;