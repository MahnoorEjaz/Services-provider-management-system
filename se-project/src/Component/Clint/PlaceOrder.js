import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Dialog, Textarea } from "@material-tailwind/react";

const MyDialogComponent = ({ CheckShow, func, Data }) => {
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [showDialog, setShowDialog] = useState(CheckShow);
    const [textareaValue, setTextareaValue] = useState('');

    const handlePlaceOrder = () => {
        if (inputValue.trim() === '') {
            setShowError(true);
        } else {
            console.log('Placing order with address:', inputValue);
            setShowError(false);
            setShowDialog(false);
            func();
            console.log(Data);
            const IDUserWhoPlaceOrder = localStorage.getItem('token');
            const IDUserWhoGetOrder = Data.createdBy._id;

            toast.success('Order Placed Successfully');
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

    return (
        <div>
            {/* Dialog Box */}
            {showDialog &&

                (
                    <Dialog
                        size="xs"
                        open={CheckShow} // This is the state of dialog box 
                        handler={func}
                        className="bg-transparent shadow-none"
                    >
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop" onClick={(e) => handleBackdropClick(e)}>
                            <div
                                className="bg-white p-8 rounded shadow-md max-w-md"
                                onKeyPress={(e) => handleKeyPress(e)}
                            >
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
                                <div>
                                    <Textarea
                                        id="additionalInfo"
                                        placeholder="Add any information that may help build trust (optional)"
                                        className={`mt-1 p-4 border ${showError ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300`}
                                        value={textareaValue}
                                        onChange={(e) => setTextareaValue(e.target.value)}
                                    />
                                </div>
                                {/* Buttons */}
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none mr-2"
                                        onClick={() => handlePlaceOrder()}
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
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                )}
        </div>
    );
};

export default MyDialogComponent;
