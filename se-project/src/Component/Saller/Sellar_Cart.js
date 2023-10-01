import * as React from 'react';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import SimpleImageSlider from 'react-simple-image-slider'
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import P1 from '../Pic/P4.jpg'
import P2 from '../Pic/Gig.png'
import P3 from '../Pic/Capture1.PNG'
import P4 from '../Pic/p2.PNG'
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { CardMedia } from '@mui/material';


export default function BasicCard() {

    const sliderImages = [
        {
            url: P1,
        },
        {
            url: P2,
        },
        {
            url: P3,
        },
        {
            url: P4,
        },
    ];
    //     <div>
    //     {/* <Typography level="title-lg">Yosemite National Park</Typography> */}
    //     {/* <Typography level="body-sm">April 24 to May 02, 2021</Typography> */}
    // </div>
    return (
        <div className='Saller-Card' style={{ maxWidth: '340px' }}>
            <CardMedia>
                <SimpleImageSlider
                    width={340}
                    height={200}
                    images={sliderImages}
                    showBullets={true}
                />
            </CardMedia>
            <CardContent sx={{border:'1px solid rgba(34, 35, 37, 1)'}}>
                <div style={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }}>S</Avatar>
                    <p style={{ marginLeft: '10px' }}>Saleemalik9970<br /><span style={{ color: 'rgba(255, 190, 91, 1)' }}>Top Rated Saller</span></p>
                </div>
                <p style={{ marginLeft: '5px',marginTop:'-10px', }}>I will design UI UX for mobile app with figma for ios or android</p>
            </CardContent> 
        </div>
    );
}