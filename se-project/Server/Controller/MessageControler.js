const Message = require('../Model/Message');
const User = require('../Model/User');

// Adding All the Message in the Database

async function AddMessage(req, res) {
    try {
        const { IDUserWhoGetMessage, Message, Image } = req.body;
        const IDUserWhoSendMessage = req.user.id;
        if (!IDUserWhoSendMessage) {
            console.log('User not authenticated');
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const existingMessage = await Message.findOne({
            IDUserWhoSendMessage,
            IDUserWhoGetMessage,
        });
        if (existingMessage) {
            return res.status(400).json({ message: 'You already have an Message under request to this Saller' });
        }
        else {
            const message = new Message({
                IDUserWhoSendMessage: IDUserWhoSendMessage,
                IDUserWhoGetMessage,
                Message,
                Image,
                createdAt: new Date(),
                isActive: true,
            });
            const result = await message.save();
            return res.status(201).json({ message: 'Your Message Is Send To The Saller ', data: result });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}   
