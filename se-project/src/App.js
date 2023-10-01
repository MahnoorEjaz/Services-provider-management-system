import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Component/Slider';
import AboutUs from './Component/About-Us';
import Contactus from './Component/Contactus';
import Feqs from './Component/Feq';
import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';
import LoginForm from './Component/Login/Login_';
import Clint_Complete from './Component/Clint/Clint_Complete';
import { useState } from 'react';




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Router>
        <Clint_Complete />
        {/* below is the content for the home page  */}
        {/* <Header /> */}
        {/* <ImageSlider />
        <AboutUs />
        <Contactus />
        <Feqs />
        <FooterOtherThanMap /> */}
        <Routes>
          <Route path="/" component={<Header />} />
          <Route path="/services" component={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
