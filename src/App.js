import React from "react";
import {Component} from "react";
import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {HashRouter, BrowserRouter, Route, Switch} from "react-router-dom";
import {UsersContainer} from "./components/users/usersContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./pages/login/login";
import {connect} from "react-redux";
import {userlogut, userName} from "./redux/authReducer";
import Preloader from "./components/Preloader/preloader";
import {initializeApp} from "./redux/appReducer";

import ProfileContainer from "./components/profile/profileContainer";
import {withSuspense} from "./components/hoc/withSuspense";
import Study from "./pages/study/study";
const DialogsConteiner = React.lazy( () => import("./components/dialogs/dialogsContainer"));

class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert ("Ну какая то ошибка, хз.")
    }


    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors) //обрабоктка всех ошибок
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {

        if(!this.props.initialized) {
            return (
                <Preloader />
            )
        }

        return (
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <LeftMenu/>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" render={() => <ProfileContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/messages" render={withSuspense(DialogsConteiner)}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/study" render={() => <Study/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="*" render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.appReduser.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);

