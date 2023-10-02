import React, { useState } from 'react';
import Sellar_Cart from '../Saller/Sellar_Cart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import P1 from '../Pic/P4.jpg'
import P2 from '../Pic/Gig.png'
import P3 from '../Pic/Capture1.PNG'
import P4 from '../Pic/p2.PNG'


const Top_Rated_slider = () => {
    const carddata = [
        {
            url: [P1, P2, P3, P4],
            title: 'Professional Web Development Services',
            Rating: 5,
            Price: 50,
            Orders: 100,
            Name: 'WebDevPro123',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Graphic Design and Logo Creation',
            Rating: 4.5,
            Price: 40,
            Orders: 75,
            Name: 'DesignMaster',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Virtual Assistant for Administrative Tasks',
            Rating: 4.2,
            Price: 20,
            Orders: 50,
            Name: 'VAExpert',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Professional Copywriting and Content Writing',
            Rating: 4.7,
            Price: 35,
            Orders: 90,
            Name: 'CopyWordsmith',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Video Editing and Post-Production Services',
            Rating: 4.4,
            Price: 45,
            Orders: 60,
            Name: 'VideoWizard',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Social Media Marketing and Advertising',
            Rating: 4.6,
            Price: 30,
            Orders: 80,
            Name: 'SocialMediaGuru',
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Translation Services for Multiple Languages',
            Rating: 4.0,
            Price: 25,
            Orders: 40,
            Name: 'LangMaster',
        },
    ];
    const carouselItems = carddata.map((data, index) => (
        <div key={index}>
            <Sellar_Cart CardData={data} />
        </div>
    ));
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const CustomButtonGroup = ({ next, previous }) => (
        <div className="custom-button-group" style={{ margin: '10px' }}>
            <button className='btn-custom' style={{ marginRight: '10px', borderRadius: '50%', textAlign: 'center' }} onClick={previous}>
                <ArrowBackIosIcon onClick={previous} />
            </button>
            <button className='btn-custom' style={{ marginRight: '10px', borderRadius: '50%', textAlign: 'center' }} onClick={next}>
                <ArrowForwardIosIcon onClick={next} />
            </button>
        </div>
    );
    return (
        <div style={{ marginRight: '50px', border: '1px solid rgba(34, 35, 37, 1) ', padding: '10px' }}>
            <p> <FaArrowRight style={{ marginRight: '5px' }} />Most popular  Servicess</p>
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                arrows={false}
                draggable={true}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
            >
                {carouselItems}
            </Carousel>
        </div>
    );


};

export default Top_Rated_slider;

