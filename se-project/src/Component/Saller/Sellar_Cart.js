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

    const { Current_Service, Set_Current_Service } = React.useContext(AppContext);
    const ViewData = () => {
        console.log(CardData);
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

    const viewDataonpage = () => {
        console.log(CardData);
        // Set_Current_Service(CardData);
    }

    return (
        // "NumberOfOrders": 0,
        // "_id": "654f40ae7c0f554825b92100",
        // "ServiceTitle": "Please Fill This Form To Become a Service Provider",
        // "BasicPrice": 12,
        // "Tags": [
        // "Please Fill This Form To Become a Service Provider"
        // ],
        // "ServiceType": "Home Renovation Contractor",
        // "Description": "<h2>Please Fill This Form To Become a Service Provider</h2><p>\t\t</p>",
        // "Gallary": [],
        // "createdBy": {
        // "_id": "65475b43f4223646fa9f2aa7",
        // "Name": "saleem Malik"
        // },
        // "createdAt": "2023-11-11T08:51:58.615Z",
        // "updatedAt": null,
        // "isActive": true,
        // "__v": 0

        <div className='Saller-Card' style={{ maxWidth: '300px', height: '450px', cursor: 'pointer', overflow: 'hidden', borderBottom: '1px solid rgba(34, 35, 37, 1)', margin: '5px' }}>
            <CardMedia >
                <div onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {CardData.Gallary && CardData.Gallary.length > 0 && (
                        <SimpleImageSlider
                            width={300}
                            height={200}
                            images={CardData.Gallary.map(image => ({ url: `data:image/jpeg;base64,${image.data}` }))}
                            showBullets={true}
                            showNavs={showNavs_}
                        />
                    )} 
                </div>
            </CardMedia>
            <CardContent sx={{ border: '1px solid rgba(34, 35, 37, 1)', borderTop: '1px solid white', height: '150%' }}>
                <div style={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: 'rgba(29, 191, 115, 1)', marginTop: '10px' }} onClick={viewDataonpage} > {CardData.createdBy?.Name[0]}  </Avatar>
                    <p style={{ marginLeft: '10px' }}>{CardData.Name}<br /><span style={{ color: 'rgba(255, 190, 91, 1)' }}>Top Rated Seller</span></p>
                </div>
                <Link className='service-tittel' to='/Current-Saller' onClick={ViewData} > {CardData.ServiceTitle} </Link>
                <div style={{ display: 'flex' }}>
                    <StarIcon style={{ color: 'rgba(255, 190, 91, 1)' }} />
                    <p style={{ marginTop: '2px', marginLeft: '5px', color: 'rgba(255, 190, 91, 1)' }}>{'0'}<span style={{ marginLeft: '5px', color: 'rgba(181, 182, 186, 1)' }}>({CardData.NumberOfOrders})</span></p>
                </div>
                <Divider />
                <div style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '150%' }}>
                    <FaHeart style={iconStyle} onClick={toggleLike} />
                    <div>
                        <p style={{ color: 'rgba(116, 118, 126, 1)' }}>
                            Started At <br />
                            ${CardData.BasicPrice}
                        </p>
                    </div>
                </div>
            </CardContent>
        </div>
    );
}