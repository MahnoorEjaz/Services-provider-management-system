import * as React from 'react';
import CardContent from '@mui/joy/CardContent';
import SimpleImageSlider from 'react-simple-image-slider'
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import { CardMedia, Divider } from '@mui/material';
import { FaHeart } from 'react-icons/fa';

export default function BasicCard({ CardData }) {

    const ViewData = () => {
        alert('View Function is called with the Card Data');
    }

    return (

        <div  className='Saller-Card' style={{ maxWidth: '300px', height: '450px', cursor: 'pointer', overflow: 'hidden' , borderBottom:'1px solid rgba(34, 35, 37, 1)'}}>
            <CardMedia >
                <SimpleImageSlider  width={300} height={200} images={CardData.url} showBullets={true} showNavs = {true} />
            </CardMedia>
            <CardContent sx={{ border: '1px solid rgba(34, 35, 37, 1)', borderTop: '1px solid white', height: '150%' }}>
                <div style={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }}>{CardData.Name[0]}</Avatar>
                    <p style={{ marginLeft: '10px' }}>{CardData.Name}<br /><span style={{ color: 'rgba(255, 190, 91, 1)' }}>Top Rated Seller</span></p>
                </div>
                <a className='service-tittel' href='#' onClick={ViewData}> {CardData.title} </a>
                <div style={{ display: 'flex' }}>
                    <StarIcon style={{ color: 'rgba(255, 190, 91, 1)' }} />
                    <p style={{ marginTop: '2px', marginLeft: '5px', color: 'rgba(255, 190, 91, 1)' }}>{CardData.Rating}<span style={{ marginLeft: '5px', color: 'rgba(181, 182, 186, 1)' }}>({CardData.Orders})</span></p>
                </div>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '150%'}}>
                    <FaHeart style={{ color: 'rgba(116, 118, 126, 1)', fontSize: '20px',marginTop:'20px' }} onClick={() => { }} />
                    <div>
                        <p style={{ color: 'rgba(116, 118, 126, 1)' }}>
                            Started At <br />
                            {CardData.Price}
                        </p>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}
