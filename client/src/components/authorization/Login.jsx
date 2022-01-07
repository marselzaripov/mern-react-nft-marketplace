import React, {useState} from 'react';
//import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import sc1 from '../../assets/img/sc1.png'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">

                            <h3 className="login__title">Login to NFTs</h3>
                            <h6 className="login__name">Login with social</h6>
                            <div className="login__btns">
                                <button className="login__btn">
                                    <i className="fab fa-google"></i>
                                    <p>Google</p>
                                </button>
                                <button className="login__btn">
                                    {/*<img src={sc1} alt="Fb"/>*/}
                                        <p>Facebook</p>
                                </button>
                            </div>
                            <h6 className="login__name">Or login with email</h6>

                            <Input value={email} setValue={setEmail} type="email" placeholder="Your Email Address" autoComplete="on" required/>
                            <Input value={password} setValue={setPassword} type="password" placeholder="Your Password" autoComplete="on" required/>

                                    <div className="login__wrap">
                                        <div className="login__check">
                                            <input type="checkbox" id="login__check" className="login__box"/>
                                                <label htmlFor="login__check" className="login__label">Remember
                                                    me</label>
                                        </div>
                                        <button className="login__forgot">Forgot Password?</button>
                                    </div>
                                    <button className="login__button" onClick={() => dispatch(login(email, password))}>Login</button>

                    </div>
                </div>
            </div>
        </div>
        // <div className='authorization'>
        //     <div className="authorization__header">Авторизация</div>
        //     <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
        //     <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        //     <button className="authorization__btn" onClick={() => dispatch(login(email, password))}>Войти</button>
        // </div>
    );
};

export default Login;
