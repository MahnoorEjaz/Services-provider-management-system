import React, { useState, useEffect } from 'react';
import Sellar_Card from '../Saller/Sellar_Cart';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight } from 'react-icons/fa';
import { Grid } from '@mui/material';


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
                } else {
                    console.log('Error');
                }
            } catch (error) {
                console.log(error);
            }
        };
        GetUserData();
    }, []);

    return (
        <div style={{ marginRight: '50px', border: '1px solid rgba(34, 35, 37, 1) ', padding: '10px', marginBottom: '10px' }}>
            <p> <FaArrowRight style={{ marginRight: '5px' }} />Services You liked</p>
            <Grid container>
                {
                    AllServices.map((card, index) => {
                        const imagesForSlider = card.Gallary.map(item => ({ url: item.data })); // Declare and assign imagesForSlider outside the JSX
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Sellar_Card CardData={card} SimpleImageSlidero={imagesForSlider} />
                            </Grid>
                        );


                    }
                    )
                }

            </Grid>


        </div>
    );


};

export default Top_Rated_slider;

