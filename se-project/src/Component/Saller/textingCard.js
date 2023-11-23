import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testing.css';


function App() {

    const [active, setActive] = React.useState(1); // Loading state
    const [LoadChat, setLoadChat] = React.useState(1); // Loading state

    const handleChatClick = (userId) => {
        setLoadChat(userId);
        setActive(userId);
    };

    const Messages = [
        {
            id: 1,
            name: 'Saleem Malik',
            message: 'This is the first Message',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Send',
        },
        {
            id: 2,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Recived',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Send',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Send',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Send',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Recived',
        },
        {
            id: 3,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Recived',
        },
        {
            id: 39,
            name: 'John Doe',
            message: 'This is the Seconde',
            time: '2:32 AM',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
            Status: 'Recived',
        }
    ];
    const Profile = [
        {
            id: 1,
            name: 'Saleem Malik',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 2,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 3,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 4,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 5,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 6,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 7,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: 8,
            name: 'John Doe',
            image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },



    ];  // Loading state



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
                                                <li data-toggle="tab" data-target="#inbox-message-1" onClick={() => handleChatClick(item.id)} className={LoadChat === item.id ? 'active' : ''}>
                                                    <img alt="" class="img-circle medium-image" src={item.image} />
                                                    <div class="vcentered info-combo">
                                                        <h3 class="no-margin-bottom name">{item.name}</h3>
                                                        <h5>This is the first Message </h5>
                                                    </div>
                                                    <div class="contacts-add">
                                                        <span class="message-time"> 2:32 <sup>AM</sup></span>
                                                        <i class="fa fa-trash-o"></i>
                                                        <i class="fa fa-paperclip"></i>
                                                    </div>
                                                </li>
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

                                        Messages.map((item, index) => (
                                            item.id === LoadChat ? (
                                                item.Status === 'Send' ? (
                                                    <div class="message my-message" key={index}>
                                                        <img alt="" class="img-circle medium-image" src={item.image} />
                                                        <div class="message-body">
                                                            <div class="message-body-inner">
                                                                <div class="message-info">
                                                                    <h4>{item.name}</h4>
                                                                    <h5><i class="fa fa-clock-o"></i> {item.time}</h5>
                                                                </div>
                                                                <hr />
                                                                <div class="message-text">
                                                                    {item.message}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                ) : (
                                                    <div class="message info" key={index}>
                                                        <img alt="" class="img-circle medium-image" src={item.image} />
                                                        <div class="message-body">
                                                            <div class="message-info">
                                                                <h4>{item.name}</h4>
                                                                <h5><i class="fa fa-clock-o"></i> {item.time}</h5>
                                                            </div>
                                                            <hr />
                                                            <div class="message-text">
                                                                {item.message}
                                                            </div>
                                                        </div>
                                                        <br />
                                                    </div>
                                                )
                                            ) : null
                                        ))
                                    }

                                </div>

                                <div class="chat-footer">
                                    <textarea class="send-message-text"></textarea>
                                    <label class="upload-file">
                                        <input type="file" required="" />
                                        <i class="fa fa-paperclip"></i>
                                    </label>
                                    <button type="button" class="send-message-button btn-info"> <i class="fa fa-send"></i> </button>
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