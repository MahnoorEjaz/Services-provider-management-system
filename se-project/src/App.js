import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Component/Slider';
import AboutUs from './Component/About-Us';
import Contactus from './Component/Contactus';
import Feqs from './Component/Feq';
import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';
import LoginForm from './Component/Login/Login_';
import { useState } from 'react';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Router>
        <Header />
        {/* <LoginForm isShowLogin={isShowLogin} /> */}
        <ImageSlider />
        <AboutUs />
        <Contactus />
        <Feqs />
        <FooterOtherThanMap />
        <div>
          <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          />
          {isOpen && <LoginForm
            content={<>
              <b>Design your Popup</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button>Test button</button>
            </>}
            handleClose={togglePopup}
          />}
        </div>
        <Routes>
          <Route path="/" component={<Header />} />
          <Route path="/services" component={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
