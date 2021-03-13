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

const App = (props) => {


  return (
    <BrowserRouter>
        <div className="App">
            <HeaderContainer />
            <LeftMenu />
            <div className="content">
                <Route exact path="/" render={ () => <ProfileContainer />} />
                <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
                <Route path="/messages" render={ () => <DialogsConteiner />} />
                <Route path="/users" render={ () => <UsersContainer />} />
                <Route path="/login" render={ () => <Login />} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
