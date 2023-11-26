import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Dialog, Textarea, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import Chat from '../Saller/textingCard';


const MyDialogComponent = ({ CheckShow, func, Data, ShowChatComponent }) => {
    const navigate = useNavigate();
    const openInNewTab = (url) => {
        const newTab = window.open(url, '_blank');
        newTab.focus();
    }; // Function to open a new tab with the given URL
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [showDialog, setShowDialog] = useState(CheckShow);
    const [textareaValue, setTextareaValue] = useState('');
    const [Sender, SetSender] = useState('');
    const [Receiver, SetReciver] = useState('');
    const [ShowChat, SetShowChat] = useState(false);
    const handlePlaceOrder = async () => {

        if (inputValue.trim() === '') {
            setShowError(true);
        } else {
            ShowChatComponent();
            console.log('Placing order with address:', inputValue);
            setShowError(false);
            setShowDialog(false);
            func();
            console.log(Data);
            const IDUserWhoPlaceOrder = localStorage.getItem('token');
            let IDUserWhoGetOrder = Data.createdBy._id;
            const Address = inputValue;
            const ServiceID = Data._id;
            const Price = Data.BasicPrice;
            const Status = "Requested";
            const createdAt = new Date();
            const updatedAt = new Date();
            const isActive = true;
            const OrderData = { IDUserWhoGetOrder, Address, ServiceID, Price, Status, createdAt, updatedAt, isActive }; // Create an object with the data to be sent to the server
            console.log(IDUserWhoGetOrder);
            localStorage.setItem('IDUserWhoGetOrder', IDUserWhoGetOrder);
            console.log(Data);
            const apiUrl = 'http://localhost:5000/api/NewOrder'; // API URL for the backend to be added here later
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + IDUserWhoPlaceOrder, // Add the token to the Authorization header/bearer token
                    },
                    body: JSON.stringify(OrderData),
                });
                const data = await response.json();
                if (response.ok) { // if HTTP-status is 200-299
                    toast.success(data.message);
                    console.log(data.data.IDUserWhoPlaceOrder);
                    const IDUserWhoPlaceOrder = data.data.IDUserWhoPlaceOrder;
                    localStorage.setItem('Sender', IDUserWhoPlaceOrder);
                    localStorage.setItem('Receiver', IDUserWhoGetOrder); // Store the ID of the user who placed the order in the local storage
                    const newRoute = '/SallerDashboard'; // Create a route to the SallerDashboard page
                    SetSender(IDUserWhoPlaceOrder);
                    SetReciver(IDUserWhoGetOrder)
                    SetShowChat(true);
                    openInNewTab(newRoute);
                } else {
                    console.error('Error:', response.statusText);
                    toast.error(data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error(error.message);
            }
        }
    };
    const handleChatNow = () => {
        console.log('Chat Now button pressed');
    };
    const handleCancel = () => {
        setShowError(false);
        setShowDialog(false);
        func();
    };
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setShowDialog(false);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handlePlaceOrder();
        }
    };
    const handleChange = (event) => {
        setTextareaValue(event.target.value);
    };
    return (
        <>
            <Dialog
                size="xs"
                open={CheckShow} // This is the state of dialog box 
                handler={func}
                className="bg-transparent shadow-none"
            >
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop" onClick={(e) => handleBackdropClick(e)}>
                    <div className="bg-white p-8 rounded shadow-md max-w-md" >
                        <div className="flex justify-end">
                            {/* Cross Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 cursor-pointer"
                                onClick={handleCancel}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h4>If You want to Place Order Please Enter Complete Address</h4>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                                Complete Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className={`mt-1 p-2 border ${showError ? 'border-red-500' : 'border-gray-300'} rounded-md w-full focus:outline-none focus:ring focus:border-blue-300`}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            {showError && <p className="text-red-500 text-sm mt-1">Please fill in the address field.</p>}
                        </div>
                        <div className="my-4">
                            <label className="block text-sm font-medium text-gray-600" htmlFor="multilineInput">
                                Add Some Information About Your Order (Optional)
                            </label>
                            <textarea
                                id="multilineInput"
                                className="resize-none border rounded-md w-full h-32 p-2 focus:outline-none focus:ring focus:border-blue-300"
                                value={textareaValue}
                                onChange={handleChange}
                                placeholder="Type your text here..."
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none mr-2"
                                onClick={handlePlaceOrder}
                            >
                                Place Order
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none mr-2"
                                onClick={() => handleChatNow()}
                            >
                                Chat Now
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                                onClick={handleCancel}
                                style={{ cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
            {
                ShowChat && <Chat Sender={Sender} Receiver={Receiver} />
            }
        </>
    );
};

export default MyDialogComponent;
