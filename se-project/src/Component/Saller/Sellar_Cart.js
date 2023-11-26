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
import { toast } from 'react-toastify';

export default function BasicCard({ CardData, SimpleImageSlidero }) {
    const [CardData_, setCardData_] = React.useState(CardData);
    const { Current_Service, Set_Current_Service } = React.useContext(AppContext);
    const ViewData = () => {
        console.log(CardData);
        localStorage.setItem('Current_Service', JSON.stringify(CardData));
        const Data = localStorage.getItem('Current_Service');
        console.log(Data);
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
    const toggleLike = async (ServiceID) => {
        if (liked === false) {
            setLiked(true);
        } else {
            setLiked(false); // If the user clicks the button again, unlike it
            return;
        }
        const token = localStorage.getItem('token');
        if (liked === true) {
            try {
                const apiUrl = `http://localhost:5000/api/LikeGig`;
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                    body: JSON.stringify({ ServiceID: ServiceID })
                });
                const data = await response.json();
                if (response.ok) {
                    console.log(data);
                    toast.success(data.message);
                } else {
                    console.log('Error');
                    toast.error('Error in the server');

                }
            } catch (error) {
                console.log(error);
            }
        }
        else {
            try {
                alert('Removed'); 
                const apiUrl = `http://localhost:5000/api/RemoveServiceFromLiked?ID=${ServiceID}`;
                const response = fetch(apiUrl, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                });
                if (response.ok) {
                    console.log('Removed');
                    toast.success('Removed');
                } else {
                    console.log('Error');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const iconColor = liked ? 'rgba(255, 190, 91, 1)' :null; //'rgba(255, 190, 91, 1)
    const iconStyle = {
        fontSize: '20px',
        marginTop: '20px',
        color: iconColor,
    };

    const viewDataonpage = () => {
        console.log(CardData);
    }

    return (

        <div className='Saller-Card' style={{ maxWidth: '300px', height: '450px', cursor: 'pointer', overflow: 'hidden', borderBottom: '1px solid rgba(34, 35, 37, 1)', margin: '5px' }}>
            <CardMedia >
                <div onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {CardData.Gallary && CardData.Gallary.length > 0 && (
                        <SimpleImageSlider
                            width={300}
                            height={200}
                            images={SimpleImageSlidero}
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
                    <FaHeart style={iconStyle} onClick={() => toggleLike(CardData._id)} />
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