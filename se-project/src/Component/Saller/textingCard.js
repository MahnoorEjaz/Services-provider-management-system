import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testing.css';


function App({ Sender, Receiver }) {

    const [active, setActive] = React.useState(1); // Loading state
    const [LoadChat, setLoadChat] = React.useState(1); // Loading state
    const [IDUserWhoSendMessage] = useState(Sender); // Replace with your actual sender ID
    const [IDUserWhoGetMessage, SetIDUserWhoGetMessage] = useState(Receiver); // Replace with your actual receiver ID 
    const [Profile, SetProfiles] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessagesData] = useState([]);
    const [SelectedUserSendMessages, SetSelectedUserSendMessages] = useState([]);

    const handleChatClick = (userId) => {
        setLoadChat(userId);
        setActive(userId);
        SetIDUserWhoGetMessage(userId);
        fetchMessagesNew();
    };
    useEffect(() => {
        const fetchMessagesNew = async () => {
            try {
                const url = `http://localhost:5000/api/GetAllMessages_1?IDUserWhoGetMessage=${IDUserWhoGetMessage}&IDUserWhoSendMessage=${IDUserWhoSendMessage}`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.data);
                    setMessagesData(data.data);
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
                alert('Error fetching messages');
            }
        };
        fetchMessagesNew();
        AllUsersData();
        // const intervalId = setInterval(fetchMessagesNew, 5000);
        // return () => clearInterval(intervalId);
    }, []);

    const AllUsersData = async () => {
        try {
            const url = `http://localhost:5000/api/AllUsers`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.data);
                SetProfiles(data.data);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
            alert('Error fetching messages');
        }
    }

    const fetchMessagesNew = async () => {
        try {
            const url = `http://localhost:5000/api/GetAllMessages_1?IDUserWhoGetMessage=${IDUserWhoGetMessage}&IDUserWhoSendMessage=${IDUserWhoSendMessage}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.data);
                setMessagesData(data.data);
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
            alert('Error fetching messages');
        }
    };





    const sendMessage = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/AddMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    IDUserWhoGetMessage: IDUserWhoGetMessage,
                    IDUserWhoSendMessage: IDUserWhoSendMessage, // Replace with the actual sender ID
                    UserMessage: newMessage,
                    Status: 'Send',
                }),
            });
            if (response.ok) {
                fetchMessagesNew();
                setNewMessage('');
            }
            else
                alert('Error sending message');
        } catch (error) {
            alert(error);
            console.error('Error sending message:', error);
        }
    };











    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div class="container">
                <div class="panel messages-panel">
                    <div class="contacts-list">
                        <div class="inbox-categories">
                            <div className="w-10 active" style={{ width: '320px', height: '50px' }}>
                                Inbox
                            </div>
                        </div>
                        <div class="tab-content">
                            <div id="inbox" class="contacts-outter-wrapper tab-pane active">
                                <div class="contacts-outter">
                                    <ul class="list-unstyled contacts">
                                        {
                                            Profile.map((item, index) => (
                                                item._id === IDUserWhoGetMessage ? (
                                                    <li data-toggle="tab" data-target="#inbox-message-1" onClick={() => handleChatClick(item._id)} className={LoadChat === item._id ? 'active' : ''}>
                                                        <img alt="" class="img-circle medium-image" src={item.ProfileImage} />
                                                        <div class="vcentered info-combo">
                                                            <h3 class="no-margin-bottom name">{item.Name}</h3>
                                                            <h5>{item.Email}</h5>
                                                        </div>
                                                        <div class="contacts-add">
                                                            <span class="message-time"> 2:32 <sup>AM</sup></span>
                                                            <i class="fa fa-trash-o"></i>
                                                            <i class="fa fa-paperclip"></i>
                                                        </div>
                                                    </li>
                                                ) : null
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="tab-content">
                        <div class="tab-pane message-body active" id="inbox-message-1">
                            <div class="message-top">
                                <a class="btn btn btn-success new-message"> <i class="fa fa-envelope"></i> New Message </a>
                            </div>
                            <div class="message-chat">
                                <div class="chat-body">
                                    {
                                        messages.map((item, index) => (
                                            true ? (
                                                item.Status === 'Send' && item.IDUserWhoSendMessage === IDUserWhoSendMessage ? (
                                                    <div class="message my-message" key={index}>
                                                        <img alt="" class="img-circle medium-image" src={item.Image} />
                                                        <div class="message-body">
                                                            <div class="message-body-inner">
                                                                <div class="message-info">
                                                                    <h4>{item.Name}</h4>
                                                                    <h5><i class="fa fa-clock-o"></i> {item.createdAt}</h5>
                                                                </div>
                                                                <hr />
                                                                <div class="message-text">
                                                                    {item.UserMessage}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                ) :
                                                    item.Status === 'Received' && item.IDUserWhoGetMessage === IDUserWhoSendMessage ? (
                                                        <div class="message info" key={index}>
                                                            <img alt="" class="img-circle medium-image" src={item.Image} />
                                                            <div class="message-body">
                                                                <div class="message-info">
                                                                    <h4>{item.name}</h4>
                                                                    <h5><i class="fa fa-clock-o"></i> {item.createdAt}</h5>
                                                                </div>
                                                                <hr />
                                                                <div class="message-text">
                                                                    {item.UserMessage}
                                                                </div>
                                                            </div>
                                                            <br />
                                                        </div>
                                                    ) : null

                                            ) : null
                                        ))
                                    }

                                </div>

                                <div class="chat-footer">
                                    <textarea class="send-message-text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onClick={fetchMessagesNew} ></textarea>
                                    <label class="upload-file">
                                        <input type="file" required=""
                                        />
                                        <i class="fa fa-paperclip"></i>
                                    </label>
                                    <button type="button" class="send-message-button btn-info" onClick={sendMessage} > <i class="fa fa-send"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;