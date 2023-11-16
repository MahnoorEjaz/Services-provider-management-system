import React, { useState, useEffect } from 'react';
import Sellar_Cart from '../Saller/Sellar_Cart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from 'react-icons/fa';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Toast } from 'react-toastify';


const Top_Rated_slider = () => {
    const [AllServices, setAllServices] = useState([]);
    useEffect(() => {
        const GetUserData = async () => {
            setAllServices([]);
            try {
                const apiUrl = `http://localhost:5000/api/GetAllServicesForallUser`;
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    console.log(data);
                    setAllServices(data);
                }
                else {
                    console.log('Error');
                }
            } catch (error) {
                console.log(error);
            }
        };
        GetUserData();
    }, []);
    const carouselItems = AllServices
        .slice(0, 10) // Take only the first 10 elements
        .map((service, index) => {
            const imagesForSlider = service.Gallary.map(item => ({ url: item.data }));
            return (
                <div key={index}>
                    <Sellar_Cart CardData={service} SimpleImageSlidero={imagesForSlider} />
                </div>
            );
        });

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
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>
    );


};

export default Top_Rated_slider;

