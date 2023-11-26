import React from 'react';
import { Divider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserProfile = ({ UserID }) => {
    const TotalServices = 100;
    const Inboxresponse = 100;
    const Orderresponse = 100;
    const Delivered = 100;
    const Ordercompletion = 10;
    const [image1, setImage] = useState(null);
    const [BinaryDataImage, setBinaryDataImage] = useState(null);
    const inputfile1 = React.useRef(null);
    const [userName, setUserName] = useState('Saller Name');

    const changeImageDiv = () => {
        inputfile1.current.click();
    }
    useEffect(() => {
        const GetUserData = async () => {
            try {
                const apiUrl = `http://localhost:5000/api/GetUserByID?ID=${UserID}`;
                const response = await fetch(apiUrl, {
                    method: 'GET',
                });
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    setUserName(data.Data.Name);
                    setImage(data.Data.ProfileImage);
                } else {
                    console.log('Error');
                }
            } catch (error) {
                console.log(error);
            }
        };
        GetUserData();
    }, [BinaryDataImage]);
    const handleImageInput = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                AddDataInDatabase(reader.result);
            };
            const newImages = URL.createObjectURL(file);
            setImage(newImages);
        }
        else {
            toast.error('Please Select Image');
        }
    }


    const AddDataInDatabase = async (BinaryDataImage) => {
        try {
            const apiUrl = `http://localhost:5000/api/AddProfilePicBYID?ID=${UserID}`;
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ProfileImage: BinaryDataImage })
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                toast.success('Profile Image Updated Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setBinaryDataImage(BinaryDataImage);
            } else {
                // Handle non-successful response
                const errorData = await response.json();
                console.error(errorData);
                toast.error('Error updating profile image');
            }
        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred');
        }
    };
    return (
        <>
            <div className='profile-leftside-main-div'>
                <div className='Profile-pic' onClick={changeImageDiv} >
                    <img src={image1} alt='Loading...' className='Profile-pic' />  {/* src={UserImage} */}
                    <input type="file" name="Pic1" ref={inputfile1} accept="image/*" onChange={handleImageInput} style={{ display: 'none' }} required />
                </div>
                <h5 style={{ color: 'rgba(116, 118, 126, 1)' }} >{userName}</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(116, 118, 126, 1)', }}>
                    <p>
                        Total Services
                    </p>
                    <LinearProgress
                        variant="determinate"
                        value={TotalServices}
                        style={{ width: '25%', height: '10px', borderRadius: '5px', marginTop: '10px', marginLeft: '50px' }}
                        color='success'
                    />
                    <p>
                        <span>{TotalServices}%</span>
                    </p>
                </div>
                <div className='ViewProfile-contant' style={{ marginTop: '20px' }}>
                    <p>
                        Inbox response rate
                    </p>
                    <LinearProgress
                        variant="determinate"
                        value={Inboxresponse}
                        style={{ width: '25%', height: '10px', borderRadius: '5px', marginTop: '0px' }}
                        color='success'
                    />
                    <p>
                        <span>{Inboxresponse}%</span>
                    </p>
                </div>
                <div className='ViewProfile-contant' style={{ marginTop: '20px' }}>
                    <p>
                        Order response rate
                    </p>
                    <LinearProgress
                        variant="determinate"
                        value={Orderresponse}
                        style={{ width: '25%', height: '10px', borderRadius: '5px', marginTop: '10px' }}
                        color='success'
                    />
                    <p>
                        <span>{Orderresponse}%</span>
                    </p>
                </div>
                <div className='ViewProfile-contant' style={{ marginTop: '20px' }}>
                    <p>
                        Delivered on time
                    </p>
                    <LinearProgress
                        variant="determinate"
                        value={Delivered}
                        style={{ width: '25%', height: '10px', borderRadius: '5px', marginTop: '20px', marginLeft: '10px' }}
                        color='success'
                    />
                    <p>
                        <span>{Delivered}%</span>
                    </p>
                </div>
                <div className='ViewProfile-contant' style={{ marginTop: '20px' }}>
                    <p>Order completion</p>
                    <LinearProgress
                        variant="determinate"
                        value={Ordercompletion}
                        style={{ width: '25%', height: '10px', borderRadius: '5px', marginTop: '25px', marginLeft: '10px' }}
                        color='success'
                    />
                    <p>
                        <span>{Ordercompletion}%</span>
                    </p>
                </div>
                <Divider></Divider>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(116, 118, 126, 1)' }}>
                    <p>
                        Total Earning
                    </p>
                    <p>
                        $ 0.00
                    </p>
                </div>
            </div>

        </>
    )
}
