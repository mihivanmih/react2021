import logo from './logo.svg';
import './App.css';
import {Header} from "./components/header/header";
import {TimeStudy} from "./components/timeStudy/timeStudy";
import {Footer} from "./components/footer/footer";
import {LeftMenu} from "./components/leftMenu/leftMenu";
import {Profile} from "./components/profile/profile";

const App = () => {
  return (
    <div className="App">
        <Header />
        <LeftMenu />
        <div className="content">
            <TimeStudy />
            <Profile />
        </div>
        <Footer />
    </div>
  );
}

export default App;
