import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsConteiner} from "./components/dialogs/dialogsContainer";
import {UsersContainer} from "./components/users/usersContainer";

const App = (props) => {


  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <LeftMenu />
            <div className="content">
                <Route exact path="/" render={ () => <Profile />} />
                <Route path="/profile" render={ () => <Profile />} />
                <Route path="/messages" render={ () => <DialogsConteiner />} />
                <Route path="/users" render={ () => <UsersContainer />} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
