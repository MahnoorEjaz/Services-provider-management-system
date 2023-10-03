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
import Header_Clint from './Component/Clint/Clint';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Router>
        <Header_Clint />
        <Routes>
          <Route path="/" element={<Clint_Complete />} />
          <Route path="/seller" element={<Feqs />} />
          {/* <Route path='/View'  element= {'View gig '}/> */}
        </Routes>
      </Router>






      {/* here is the code for the landing page  */}
      {/* <Clint_Complete /> */}
      {/* The content for the home page */}
      {/* Uncomment these lines to include the components */}
      {/* <Header />
        <ImageSlider />
        <AboutUs />
        <Contactus />
        <Feqs />
        <FooterOtherThanMap /> */}

    </>
  );
}

export default App;
