import React from "react";
import {Component} from "react";
import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {HashRouter, BrowserRouter, Route} from "react-router-dom";
//import {DialogsConteiner} from "./components/dialogs/dialogsContainer";
import {UsersContainer} from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./pages/login/login";
import {connect} from "react-redux";
import {userlogut, userName} from "./redux/authReducer";
import Preloader from "./components/Preloader/preloader";
import {initializeApp} from "./redux/appReducer";



/*
const DialogsConteiner = React.lazy( () => import("./components/dialogs/dialogsContainer"));
const ProfileContainer = React.lazy( () => import("./components/profile/profileContainer"));

*/

import ProfileContainer from "./components/profile/profileContainer";
import {withSuspense} from "./components/hoc/withSuspense";
import {Study} from "./pages/study/study";
//import DialogsConteiner from "./components/dialogs/dialogsContainer";
const DialogsConteiner = React.lazy( () => import("./components/dialogs/dialogsContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized) {
            return (
                <Preloader />
            )
        }

        return (
            <HashRouter>
                <div className="App">
                    <HeaderContainer/>
                    <LeftMenu/>
                    <div className="content">
                        <Route exact path="/" render={() => <ProfileContainer/>}/>

                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        {/*<Route path="/messages" render={() => <DialogsConteiner/>}/>*/}

                        <Route path="/messages" render={withSuspense(DialogsConteiner)}/>

             {/*           <Route path="/profile/:userId?" render={() => {
                            return <React.Suspense fallback={<Preloader />}>
                                <ProfileContainer/>
                            </React.Suspense>  }}/>
                        <Route path="/messages" render={() => {
                            return <React.Suspense fallback={<Preloader />}>
                               <DialogsConteiner/>
                           </React.Suspense> }}/>*/}


                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/study" render={() => <Study/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.appReduser.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);

