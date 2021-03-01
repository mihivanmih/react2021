import './App.css';
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
            <Header />
            <LeftMenu />
            <div className="content">
                <Route exact path="/" component={Profile} />
                <Route path="/profile" component={Profile} />
                <Route path="/messages" component={Dialogs} />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
