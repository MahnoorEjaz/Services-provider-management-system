import { Grid } from '@mui/material';
import React from 'react';
import SallerViewCard from './SallerViewCard';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';

const ViewServices = () => {
    const [GetAllServices_, SetGetAllServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const GetAllServices = async () => {
            SetGetAllServices([]);
            // To get all services from server side
            const token = localStorage.getItem('token');
            const apiUrl = 'http://localhost:5000/api/GetAllServices'; // Replace 'services' with your actual endpoint to retrieve services
            try {
                setLoading(true);
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token, // Add the token to the Authorization header/bearer token
                    },
                });
                const AllData = await response.json();
                if (AllData.message === 'Service not found') {
                    toast.error('User not authenticated');
                    return;
                } 
                if (response.ok) { // if HTTP-status is 200-299 
                    SetGetAllServices(AllData); // set the services in the state
                    console.log(AllData);
                    if (AllData.length === 0) {
                        toast.error('No Services Found');
                        // setLoading(false);
                    }
                    else {
                        toast.success('All Services Found');
                        // setLoading(false);
                    }
                } else {
                    toast.error(AllData.message);
                    console.log(AllData); // log the error message
                }
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        GetAllServices();
    }
        , []);

    const Navigate = useNavigate();
    const AddNewService = () => {
        Navigate('/AddNewService');
    }
    return (
        <>
            <Grid container spacing={2} className='ViewProfile-Services'>
                {
                    GetAllServices_.map((item, index) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <SallerViewCard CardData={item} />
                                </Grid>
                            </>
                        )
                    })
                }
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <div className="rectangle-box" onClick={AddNewService}>
                        <AiOutlinePlus className="plus-icon" />
                        <p className="rectangle-box-text">Add New Service</p>
                    </div>

                </Grid>
            </Grid>
            {loading && (
                <ReactLoading className="page-container"
                    type="bars"
                    color="rgba(29, 191, 115, 1)"
                    height={50}
                    width={50}
                    position={'center'}
                />
            )}
        </>
    )
}

export default ViewServices 