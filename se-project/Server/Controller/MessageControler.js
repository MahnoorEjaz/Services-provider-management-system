const Message = require('../Models/Messages');
const User = require('../Models/MyUser');

// Adding All the Message in the Database
async function AddMessage(req, res) {
    try {
        const { IDUserWhoGetMessage, IDUserWhoSendMessage, UserMessage, Status } = req.body;
        console.log(req.body);

        const userProfile = await User.findOne({ _id: IDUserWhoSendMessage });

        const newMessage = new Message({
            IDUserWhoGetMessage,
            IDUserWhoSendMessage,
            UserMessage,
            Status,
            Image: userProfile.ProfileImage,
            Name: userProfile.Name,

        }); // Create new Message
        const savedMessage = await newMessage.save();
        const Receiver = new Message({
            IDUserWhoGetMessage,
            IDUserWhoSendMessage,
            UserMessage,
            Status: 'Received',
            Image: userProfile.ProfileImage,
            Name: userProfile.Name,
        });
        await Receiver.save();
        console.log(savedMessage);
        return res.status(200).json({ message: 'Message added successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


async function GetAllMessages(req, res) {
    try {
        const IDUserWhoSendMessage = req.body.IDUserWhoSendMessage; // Assuming userID is the property in the request body
        const IDUserWhoGetMessage = req.body.IDUserWhoGetMessage; // Assuming userID is the property in the request body
        console.log(IDUserWhoSendMessage);
        console.log(IDUserWhoGetMessage);
        const allMessages = await Message.find({
            $and: [
                { IDUserWhoSendMessage: IDUserWhoSendMessage },
                { IDUserWhoGetMessage: IDUserWhoGetMessage },
            ]
        });
        console.log(allMessages);
        return res.status(200).json({ message: 'All Messages', data: allMessages });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function GetAllMessages_1(req, res) {
    try {
        const IDUserWhoSendMessage = req.query.IDUserWhoSendMessage;
        const IDUserWhoGetMessage = req.query.IDUserWhoGetMessage;

        console.log(IDUserWhoSendMessage);
        console.log(IDUserWhoGetMessage);

        const allMessages = await Message.find({
            // $and: [
            //     { IDUserWhoSendMessage: IDUserWhoSendMessage },
            //     { IDUserWhoGetMessage: IDUserWhoGetMessage },
            // ]
        });

        return res.status(200).json({ message: 'All Messages', data: allMessages });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}



async function GetAllMessages_2(req, res) {
    try {
        const IDUserWhoSendMessage = req.query.IDUserWhoSendMessage;
        // const IDUserWhoGetMessage = req.query.IDUserWhoGetMessage;
        console.log(IDUserWhoSendMessage);
        // console.log(IDUserWhoGetMessage);
        const allMessages = await Message.find({
            $and: [
                { IDUserWhoSendMessage: IDUserWhoSendMessage },
                // { IDUserWhoGetMessage: IDUserWhoGetMessage },
            ]
        });
        return res.status(200).json({ message: 'All Messages', data: allMessages });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    } 
}




module.exports = {
    AddMessage,
    GetAllMessages,
    GetAllMessages_1,
    GetAllMessages_2
}

