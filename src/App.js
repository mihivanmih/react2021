import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsConteiner} from "./components/dialogs/dialogsContainer";
import {UsersContainer} from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./pages/login/login";
import {Component} from "react";
import {connect} from "react-redux";
import {userlogut, userName} from "./redux/authReducer";
import Preloader from "./components/Preloader/preloader";
import {initializeApp} from "./redux/appReducer";

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
            <BrowserRouter>
                <div className="App">
                    <HeaderContainer/>
                    <LeftMenu/>
                    <div className="content">
                        <Route exact path="/" render={() => <ProfileContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/messages" render={() => <DialogsConteiner/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
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

