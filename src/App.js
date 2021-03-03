import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <LeftMenu />
            <div className="content">
                <Route exact path="/" render={ () => <Profile store={props.store} dispatch={props.dispatch}/>} />
                <Route path="/profile" render={ () => <Profile store={props.store} dispatch={props.dispatch} />} />
                <Route path="/messages" render={ () => <Dialogs state={props.store.getState().messagesPage}dispatch={props.dispatch} />} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
