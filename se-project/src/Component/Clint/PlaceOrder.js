import React, { useState } from 'react';

const MyDialogComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handlePlaceOrder = () => {
        if (inputValue.trim() === '') {
            setShowError(true);
        } else {
            console.log('Placing order with address:', inputValue);
            setShowError(false);
            setShowDialog(false);
        }
    };
    const handleChatNow = () => {
        console.log('Chat Now button pressed');
    };
    const handleCancel = () => {
        console.log('Cancel button pressed');
        setShowError(false);
        setShowDialog(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setShowDialog(false);
        }
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                onClick={() => setShowDialog(true)}
            >
                Open Dialog
            </button>

            {/* Dialog Box */}
            {showDialog && (
                <div className="backdrop" onClick={(e) => handleBackdropClick(e)}>
                    <div className="bg-white p-8 rounded shadow-md max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex justify-end">
                            {/* Cross Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 cursor-pointer"
                                onClick={() => setShowDialog(false)}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h4>If You want to PlaceOrder Please Enter Complete Address</h4>
                        {/* Address Input */}
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
                                onClick={() => handleCancel()}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyDialogComponent;
