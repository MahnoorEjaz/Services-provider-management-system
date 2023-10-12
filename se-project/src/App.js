import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Component/Header';
// import ImageSlider from './Component/Slider';
// import AboutUs from './Component/About-Us';
// import Contactus from './Component/Contactus';
// import Feqs from './Component/Feq';
// import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';
// import LoginForm from './Component/Login/Login_';
import ClintComplete from './Component/Clint/Clint_Complete';
import { useState, createContext } from 'react';
import HeaderClint from './Component/Clint/Clint';
import GigView from './Component/Clint/Gig_View';
import AddNewService from './Component/Saller/AddNewService';

export const AppContext = createContext();

function App() {
  const emptyData = {
    url: [],
    title: '',
    Rating: 0,
    Price: 0,
    Orders: 0,
    Name: '',
    type: ''
  };
  const [Current_Service, Set_Current_Service] = useState(emptyData);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <AppContext.Provider value={{ Current_Service, Set_Current_Service }} >
        <Router>
          <HeaderClint />
          <Routes>
            <Route path="/" element={<ClintComplete />} />
            <Route path="/AddNewService" element={<AddNewService />} />
            <Route path="/Current-Saller" element={<GigView Current_Service={Current_Service} />} />
          </Routes>
        </Router>
      </AppContext.Provider>




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
