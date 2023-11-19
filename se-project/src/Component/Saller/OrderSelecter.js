import React from 'react';
import { Dialog, Textarea, Button } from "@material-tailwind/react";

const OrderSelecter = () => {
    const [NewOrder, SetNewOrder] = React.useState(false);
    const [Premium, setPremium] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [ShowDetail, SetShowDetail] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpen(false);
        }
    };
    const ShowOrderDetail = () => {
        SetShowDetail(!ShowDetail);
    }


    return (
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
                        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: '30px' }}>
                            <h5>Receive New Order </h5>
                            <button onClick={ShowOrderDetail} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                View Details
                            </button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: '30px' }}>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Chat Now
                            </button>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                View Location
                            </button>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Send Request
                            </button>
                        </div>
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
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4>Saleem Malik Just Place An Order With Price $20</h4>
                                <h2>Address</h2>
                                <p>Here is There Complete Address Of User </p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button onClick={ShowOrderDetail} style={{ marginRight: '10px', backgroundColor: '#fff', color: '#333', border: '1px solid #ccc', borderRadius: '5px', padding: '8px 12px' }}>
                                    Cancel
                                </button>
                                <button onClick={() => { alert('Backend is Panding') }} style={{ backgroundColor: '#007bff', color: '#fff', border: '1px solid #007bff', borderRadius: '5px', padding: '8px 12px' }}>
                                    Accept Offer
                                </button>
                            </div>

                        </div>
                    </div>
                </Dialog>





            </div>
        </div>
    );
};

export default OrderSelecter;
