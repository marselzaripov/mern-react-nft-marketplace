import React from 'react';
import ct from '../../assets/img/ct.png'

const Contacts = () => {


    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={ct} alt="Contact" className="contact__img"/>
                    </div>
                    <div className="col-md-6 offset-md-1">

                            <h3 className="contact__title">Drop up a message</h3>
                            <p className="contact__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laborum obcaecati
                                dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
                            <input type="text" name="name" className="single__input contact__input"
                                   placeholder="Your Full Name" required/>
                                <input type="email" name="email" className="single__input contact__input"
                                       placeholder="Your Email Address" required/>
                                    <div className="__select" data-state="">
                                        <div className="__select__title"/>
                                        <div className="__select__content">
                                            <input id="singleSelect0" className="__select__input" type="radio"
                                                   name="singleSelect" checked/>
                                            <label htmlFor="singleSelect0" tabIndex="0" className="__select__label"
                                                   data-value="Select subject"/>
                                            <input id="singleSelect1" className="__select__input" type="radio"
                                                   name="singleSelect"/>
                                            <label htmlFor="singleSelect1" tabIndex="0" className="__select__label"
                                                   data-value="Option 1"/>
                                            <input id="singleSelect2" className="__select__input" type="radio"
                                                   name="singleSelect"/>
                                            <label htmlFor="singleSelect2" tabIndex="0" className="__select__label"
                                                   data-value="Option 2"/>
                                            <input id="singleSelect3" className="__select__input" type="radio"
                                                   name="singleSelect"/>
                                            <label htmlFor="singleSelect3" tabIndex="0" className="__select__label"
                                                   data-value="Option 3"/>
                                            <input id="singleSelect4" className="__select__input" type="radio"
                                                   name="singleSelect"/>
                                            <label htmlFor="singleSelect4" tabIndex="0" className="__select__label"
                                                   data-value="Option 4"/>
                                        </div>
                                    </div>
                                    <textarea name="message" cols="30" rows="5"
                                              className="single__textarea contact__textarea" placeholder="Message"
                                              required/>
                                    <button className="contact__btn" type="submit">Send message</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;