import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
//import './app1.css'
import './bootstrap.min.css'
import './main.css'
import './normalize.css'
//import './jquery-ui.min.css'
//import './slick-theme.css'
import './slick.css'
import './fonts.css'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Profile from "./profile/Profile";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";
import Disk from "./disk/Disk";
import Activity from "./activity/Activity";
import Index from "./index/Index";
import Details from "./details/Details";
import Disk1 from "./disk1/Disk1";
import Disk2 from "./disk2/Disk2";
import Blog from "./blog/Blog";
import Authors from "./authors/Authors";
import Creators from "./creators/Creators";
// import './jquery-3.4.1.min.js';
// import './jquery-ui.min.js';
import './main.js';
import './author.js';
import './contact.js';
import './details.js';




function App() {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            {/*<Redirect to='/login'/>*/}
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={Disk1}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/contacts" component={Contacts}/>
                            <Route exact path="/activity" component={Activity}/>
                            <Route exact path="/details" component={Details}/>
                            <Route exact path="/createnft" component={Disk}/>
                            <Route exact path="/explore" component={Disk1}/>
                            <Route exact path="/disk2" component={Disk2}/>
                            <Route exact path="/blog" component={Blog}/>
                            <Route exact path="/authors" component={Authors}/>
                            <Route exact path="/creators" component={Creators}/>
                            {/*<Redirect to="/"/>*/}
                        </Switch>
                    }
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
