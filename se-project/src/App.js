import './App.css';
import './Component/Login/Login.css'
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Component/Slider';
import AboutUs from './Component/About-Us';
import Contactus from './Component/Contactus';
import Feqs from './Component/Feq';
import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';
// import LoginForm from './Component/Login/Login_';
import { useState } from 'react';




function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <>
      <Router>
        <Header handleLoginClick={handleLoginClick} />
        {/* <LoginForm isShowLogin={isShowLogin} /> */}
        <ImageSlider />
        <AboutUs />
        <Contactus />
        <Feqs />
        <FooterOtherThanMap />
        <Routes>
          <Route path="/" component={<Header />} />
          <Route path="/services" component={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
