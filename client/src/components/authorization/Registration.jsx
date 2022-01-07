import React, {useState} from 'react';
//import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">

                            <h3 className="login__title">Sigup to NFTs</h3>
                            <h6 className="login__name">Sigup with social</h6>
                            <div className="login__btns">
                                <button className="login__btn">
                                    <i className="fab fa-google"></i>
                                    <p>Google</p>
                                </button>
                                <button className="login__btn">
                                    {/*<img src="img/sc1.png" alt="Fb"/>*/}
                                        <p>Facebook</p>
                                </button>
                            </div>
                            <div className='authorization'>
                            <h6 className="login__name">Or sigup with email</h6>
                            <Input value={email} setValue={setEmail} type="text" placeholder="Your Email Address" autoComplete="on" required/>
                            <Input value={password} setValue={setPassword} type="password" placeholder="Your Password" autoComplete="on" required/>
                            <button className="login__button" onClick={() => registration(email, password)}>Sigup</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
        // <div className='authorization'>
        //     <div className="authorization__header">Регистрация</div>
        //     <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
        //     <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        //     <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
        // </div>
    );
};

export default Registration;
