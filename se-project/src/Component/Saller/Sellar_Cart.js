import * as React from 'react';
import CardContent from '@mui/joy/CardContent';
import SimpleImageSlider from 'react-simple-image-slider'
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import { CardMedia, Divider } from '@mui/material';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { AppContext } from '../../App';

export default function BasicCard({ CardData }) {

    const {Current_Service, Set_Current_Service}= React.useContext(AppContext);
    const ViewData = () => { 
        Set_Current_Service(CardData);
    } 


    
    const [showNavs_, setnav] = React.useState(false)
    const [liked, setLiked] = useState(false);
    const handleMouseEnter = () => {
        setnav(true);
    }
    const handleMouseLeave = () => {
        setnav(false);
    } 
    const toggleLike = () => {
        setLiked(!liked);
    };
    const iconColor = liked ? 'rgba(255, 190, 91, 1)' : 'rgba(116, 118, 126, 1)';
    const iconStyle = {
        fontSize: '20px',
        marginTop: '20px',
        color: iconColor,
    };
    return (

        <div className='Saller-Card' style={{ maxWidth: '300px', height: '450px', cursor: 'pointer', overflow: 'hidden', borderBottom: '1px solid rgba(34, 35, 37, 1)', margin: '5px' }}>
            <CardMedia >
                <div onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SimpleImageSlider width={300} height={200} images={CardData.url} showBullets={true} showNavs={showNavs_} />
                </div> 
            </CardMedia> 
            <CardContent sx={{ border: '1px solid rgba(34, 35, 37, 1)', borderTop: '1px solid white', height: '150%' }}>
                <div style={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }}>{CardData.Name[0]}</Avatar>
                    <p style={{ marginLeft: '10px' }}>{CardData.Name}<br /><span style={{ color: 'rgba(255, 190, 91, 1)' }}>Top Rated Seller</span></p>
                </div>
                <Link className='service-tittel' to='/Current-Saller' onClick={ViewData} > {CardData.title} </Link>
                <div style={{ display: 'flex' }}>
                    <StarIcon style={{ color: 'rgba(255, 190, 91, 1)' }} />
                    <p style={{ marginTop: '2px', marginLeft: '5px', color: 'rgba(255, 190, 91, 1)' }}>{CardData.Rating}<span style={{ marginLeft: '5px', color: 'rgba(181, 182, 186, 1)' }}>({CardData.Orders})</span></p>
                </div>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '150%' }}>
                    <FaHeart style={iconStyle} onClick={toggleLike} />
                    <div>
                        <p style={{ color: 'rgba(116, 118, 126, 1)' }}>
                            Started At <br />
                            ${CardData.Price}
                        </p>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}
