import React from 'react';
import Header from './Header';
import ImageSlider from './Slider';
import AboutUs from './About-Us';
import Contactus from './Contactus';
import Feqs from './Feq';
import FooterOtherThanMap from '../Footer/FooterOtherThanMap';

const CompleteLanding = () => {
    return (
        <>
            <Header />
            <ImageSlider />
            <AboutUs />
            <Contactus /> 
            <Feqs />
            <FooterOtherThanMap />
        </>
    )
}

export default CompleteLanding