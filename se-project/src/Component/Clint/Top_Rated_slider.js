import React, { useState, useEffect } from 'react';
import Sellar_Cart from '../Saller/Sellar_Cart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from 'react-icons/fa';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SimpleImageSlider from 'react-simple-image-slider'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
                    // setUserName(data.Data.Name);
                    // setImage(data.Data.ProfileImage);
                } else {
                    console.log('Error');
                }
            } catch (error) {
                console.log(error);
            }
        };
        GetUserData();

    }, []);

    var data_ = [
        {
            url: [],
            name: 'P1',
        }
    ];
    const decodeBase64 = (base64String) => {
        return atob(base64String);
    };
    var result = null;

    const carouselItems = AllServices.map((data, index) => (
        <div key={index}>
            <Sellar_Cart CardData={data} />
            {data?.Gallary?.map((item, itemIndex) => (
                <div key={itemIndex}>
                    {result = decodeBase64(item?.data)}
                    {data_[0].url.push(result)}
                    <img src={item.data} alt="image" />
                    {console.log(item.data)}
                </div>
            ))}
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
        <div style={{ marginRight: '50px', border: '1px solid rgba(34, 35, 37, 1)', padding: '10px', marginBottom: '10px' }}>
            <p> <FaArrowRight style={{ marginRight: '5px' }} />Top Rated Services</p>
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
            {data_.map((datanew, index) => (
                <div key={index}>
                    <SimpleImageSlider
                        width={300}
                        height={200}
                        images={datanew.url}
                        // images={datanew.Gallary.map((image, imageIndex) => ({
                        //     url: `data:image/png;base64,${image.data}`,
                        //     // You can also add other properties like caption, description, etc., if needed
                        //     // caption: 'Image Caption',
                        //     // description: 'Image Description',
                        // }))}
                        showBullets={true}
                    />
                </div>
            ))}
        </div>
    );




};

export default Top_Rated_slider;

