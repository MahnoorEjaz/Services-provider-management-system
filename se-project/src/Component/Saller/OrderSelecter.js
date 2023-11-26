import React from 'react';
import { Dialog, Textarea, Button } from "@material-tailwind/react";
import { useEffect } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MapContainer from './ViewMap';



const OrderSelecter = () => {

    const [NewOrder, SetNewOrder] = React.useState(false);
    const [Premium, setPremium] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [ShowDetail, SetShowDetail] = React.useState(false);
    const [OrderData, SetOrderData] = React.useState([]);
    const [OrderStatus, SetOrderStatus] = React.useState('Requested');
    const [Showmap, SetShowmap] = React.useState(false);

    useEffect(() => {
        SetNewOrder(false);
        SetShowDetail(false);
        const IDUserWhoGetOrder = localStorage.getItem('IDUserWhoGetOrder');
        const ID = localStorage.getItem('token');
        const CheckOrderStatus = async () => {
            const apiUrl = 'http://localhost:5000/api/CheckOrder'; // API URL for the backend to be added here later
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + ID, // Add the token to the Authorization header/bearer token
                    },
                    body: JSON.stringify({ IDUserWhoGetOrder: IDUserWhoGetOrder }) // Add the IDUserWhoGetOrder to the body of the request to the backend API
                });
                const data = await response.json();
                console.log(data);
                if (response.ok) { // if HTTP-status is 200-299
                    const message = data.message;
                    if (message === 'Requested') {
                        SetOrderData(data.data);
                        console.log(data.data);
                        SetNewOrder(true);
                    } else {
                        SetNewOrder(false);
                    }
                } else {
                    alert(data.message);
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
                alert(error);
            }
        };
        CheckOrderStatus(); // Call the function to check the order status 
    }, [OrderStatus]);
    const handleOpen = () => setOpen(!open);
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpen(false);
        }
    };
    const ShowOrderDetail = () => {
        SetShowDetail(!ShowDetail);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleAcceptOffer = () => {
        // Your logic for accepting the offer
        handleClose(); // Close the menu after handling the click
    };
    const handleRejectOffer = async (OrderID) => {
        alert(OrderID);
        try {
            const url = `http://localhost:5000/api/ChangeOrderStatus?ID=${OrderID}`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const Data = response.json();
                toast.success('Your Reject this order ');
                SetOrderStatus('Rejected');
                console.log(Data);
            }
            else {
                toast.success('Your Reject this order ');
            }

        } catch (error) {
            toast.error(error.message);
        }
        handleClose(); // Close the menu after handling the click
    };



    return (
        <>

            <div>
                <div className='cantainer'>
                    <div className='cantainer-1'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: '30px' }}>
                            <h5>Active Orders</h5>
                            <h5>(5)</h5>
                        </div>
                    </div>
                    {
                        NewOrder && <div className='cantainer-2'>
                            <p style={{ color: 'green', borderBottom: '1px solid #ccc', textAlign: 'center', fontSize: '20px' }} >You Get New Order Requests Please Check Details</p>
                            {OrderData.map((order, index) => (
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid #ccc' }}>
                                    <div>
                                        <h5 style={{ color: 'rgba(116, 118, 126, 1)' }}>SomeOne Just Placed An Order With Price ${order.Price}</h5>
                                        <h5 style={{ color: 'rgba(116, 118, 126, 1)' }}>Address</h5>
                                        <p style={{ color: 'rgba(116, 118, 126, 1)' }}>{order.Address}</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <IconButton onClick={handleClick}>
                                            <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleAcceptOffer}>Accept Offer</MenuItem>
                                            <MenuItem onClick={() => handleRejectOffer(order._id)} >Reject Offer</MenuItem>
                                            <MenuItem onClick={handleClose}>View Location</MenuItem>
                                            <MenuItem onClick={handleClose}>Chat Now</MenuItem>

                                            {/* Add other menu items as needed */}
                                        </Menu>
                                    </div>
                                </div>
                            ))}
                        </div>

                    }


                    {
                        !NewOrder && <div className='cantainer-2'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: '30px' }}>
                                <h5>Not Received Any Order Just Get Our Premium Package to Get More Orders</h5>
                                <button onClick={handleOpen} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    View Details
                                </button>
                            </div>

                        </div>
                    }
                    <Dialog
                        open={open}
                        handler={handleOpen}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop" onClick={(e) => handleBackdropClick(e)}>
                            <div className="bg-white p-8 rounded shadow-md max-w-md" >
                                <h4>Premium Services Is Currntly Not Aavilable We Will Lunch it Soon</h4>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button onClick={handleOpen} style={{ marginRight: '10px', backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '5px', padding: '8px 12px' }}>
                                        Cancel
                                    </button>
                                    <button onClick={handleOpen} style={{ backgroundColor: '#007bff', color: '#fff', border: '1px solid #007bff', borderRadius: '5px', padding: '8px 12px' }}>
                                        ok
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Dialog>

                    <Dialog
                        open={ShowDetail}
                        handler={ShowOrderDetail}
                        animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 },
                        }}
                    >
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop" onClick={(e) => handleBackdropClick(e)}>
                            <div className="bg-white p-8 rounded shadow-md max-w-md" >
                                {OrderData.map((order, index) => (
                                    <div key={index} style={{ marginBottom: '20px' }}>
                                        <h4>SomeOne Just Placed An Order With Price ${order.Price}</h4>
                                        <h2>Address</h2>
                                        <p>{order.Address}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <button onClick={ShowOrderDetail} style={{ backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '5px', padding: '8px 12px' }}>
                                                Cancel
                                            </button>
                                            <button onClick={() => handleAcceptOffer(order._id)} style={{ backgroundColor: '#007bff', color: '#fff', border: '1px solid #007bff', borderRadius: '5px', padding: '8px 12px' }}>
                                                Accept Offer
                                            </button>
                                            <button onClick={() => handleRejectOffer(order._id)} style={{ backgroundColor: '#ff0000', color: '#fff', border: '1px solid #ff0000', borderRadius: '5px', padding: '8px 12px' }}>
                                                Reject Offer
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Dialog>






                </div>
            </div>

            {
                Showmap && <MapContainer /> // Show the map if Showmap is true
            }
        </>
    );

};





export default OrderSelecter;
