import React, { useState } from 'react';
import Sellar_Card from '../Saller/Sellar_Cart';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import P1 from '../Pic/P4.jpg'
import P2 from '../Pic/Gig.png'
import P3 from '../Pic/Capture1.PNG'
import P4 from '../Pic/p2.PNG'
import { Grid } from '@mui/material';


const Top_Rated_slider = () => {
    const carddata = [
        {
            url: [P1, P2, P3, P4],
            title: 'Professional Web Development Services',
            Rating: 5,
            Price: 50,
            Orders: 100,
            Name: 'WebDevPro123',
            type: 'Web Development', // Added the type attribute with the value 'Web Development'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Graphic Design and Logo Creation',
            Rating: 4.5,
            Price: 40,
            Orders: 75,
            Name: 'DesignMaster',
            type: 'Graphic Design', // Added the type attribute with the value 'Graphic Design'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Virtual Assistant for Administrative Tasks',
            Rating: 4.2,
            Price: 20,
            Orders: 50,
            Name: 'VAExpert',
            type: 'Virtual Assistant', // Added the type attribute with the value 'Virtual Assistant'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Professional Copywriting and Content Writing',
            Rating: 4.7,
            Price: 35,
            Orders: 90,
            Name: 'CopyWordsmith',
            type: 'Copywriting', // Added the type attribute with the value 'Copywriting'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Video Editing and Post-Production Services',
            Rating: 4.4,
            Price: 45,
            Orders: 60,
            Name: 'VideoWizard',
            type: 'Video Editing', // Added the type attribute with the value 'Video Editing'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Social Media Marketing and Advertising',
            Rating: 4.6,
            Price: 30,
            Orders: 80,
            Name: 'SocialMediaGuru',
            type: 'Social Media', // Added the type attribute with the value 'Social Media'
        },
        {
            url: [P1, P2, P3, P4],
            title: 'Translation Services for Multiple Languages',
            Rating: 4.0,
            Price: 25,
            Orders: 40,
            Name: 'LangMaster',
            type: 'Translation', // Added the type attribute with the value 'Translation'
        },
    ];

    return (
        <div style={{ marginRight: '50px', border: '1px solid rgba(34, 35, 37, 1) ', padding: '10px', marginBottom: '10px' }}>
            <p> <FaArrowRight style={{ marginRight: '5px' }} />Services You liked</p>
            <Grid container>
                {
                    carddata.map((card, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <Sellar_Card CardData={card} />
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

