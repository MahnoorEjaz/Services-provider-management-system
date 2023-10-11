import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Component/Header';
// import ImageSlider from './Component/Slider';
// import AboutUs from './Component/About-Us';
// import Contactus from './Component/Contactus';
// import Feqs from './Component/Feq';
// import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';
// import LoginForm from './Component/Login/Login_';
import Clint_Complete from './Component/Clint/Clint_Complete';
import { useState, createContext } from 'react';
import Header_Clint from './Component/Clint/Clint';
import Gig_View from './Component/Clint/Gig_View';


export const AppContext = createContext();

function App() {
  const emptyData = {
    url: [],
    title: '',
    Rating: 0,
    Price: 0,
    Orders: 0,
    Name: '',
    type:''
    // url: [P1, P2, P3, P4],
    // title: 'Video Editing and Post-Production Services',
    // Rating: 4.4,
    // Price: 45,
    // Orders: 60,
    // Name: 'VideoWizard',

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
          <Header_Clint />
          <Routes>
            <Route path="/" element={<Clint_Complete />} />
            <Route path="/Current-Saller" element={<Gig_View Current_Service={Current_Service} />} />
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

      </AppContext.Provider>
    </>
  );
}

export default App;
