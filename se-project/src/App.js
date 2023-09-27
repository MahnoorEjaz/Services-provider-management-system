import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Component/Slider';
import AboutUs from './Component/About-Us';
import Contactus from './Component/Contactus';
import Feqs from './Component/Feq';
import FooterOtherThanMap from './Component/Footer/FooterOtherThanMap';


function App() {
  return (
    <>
      <Router>
        <Header />
        <ImageSlider />
        <AboutUs />
        <Contactus /> 
        <Feqs/>
        <FooterOtherThanMap/> 
        <Routes>
          <Route path="/" component={<Header />} />
          <Route path="/services" component={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
