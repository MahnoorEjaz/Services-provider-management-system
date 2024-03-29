const Order = require('../Models/Order');



// Adding All the Order in the Database
async function AddOrder(req, res) {
    try {
        const { IDUserWhoGetOrder, Address, ServiceID, Price, Status } = req.body;
        console.log(IDUserWhoGetOrder)
        const IDUserWhoPlaceOrder = req.user.id;
        const existingOrder = await Order.findOne({
            IDUserWhoPlaceOrder,
            IDUserWhoGetOrder,
            Status: "Requested",
        });
        if (existingOrder) {
            return res.status(400).json({ message: 'You already have an order under request to this Saller' });
        }
        const AnOtherOrder = await Order.findOne({
            IDUserWhoGetOrder,
            Status: "Inprocess",
        });
        if (AnOtherOrder) {
            return res.status(400).json({ message: 'This User is Currenly Another order' });
        }
        else {
            const order = new Order({
                IDUserWhoPlaceOrder: IDUserWhoPlaceOrder,
                IDUserWhoGetOrder,
                Address,
                ServiceID,
                Price,
                Status,
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive: true,
            });
            const result = await order.save();
            return res.status(201).json({ message: 'Your Order Request Is Send To The Saller ', data: result });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


// Check if the Order Status is Requested or not
async function CheckOrderStatus(req, res) {
    const { IDUserWhoGetOrder } = req.body;
    console.log(req.body);
    console.log(IDUserWhoGetOrder);
    const ID = req.user.id;
    try {
        const Data = await Order.find({ Status: "Requested", IDUserWhoGetOrder: IDUserWhoGetOrder });
        if (Data.length === 0) {
            return res.status(400).json({ message: 'No Order Requested' });
        } else {
            return res.status(200).json({ message: 'Requested', data: Data });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}


// Get all the Order from the Database
async function GetAllOrder(req, res) {
    try {
        const OrderData = await Order.find();
        res.status(200).json(OrderData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




// Change the Order Status from the Database 
async function ChnageOrderStatus(req, res) {
    const OrderID = req.query.ID;
    console.log(OrderID);
    try {
        // Inprocess", "Completed", "Cancelled", "Requested
        const order = await Order.findByIdAndUpdate(OrderID, { Status: "Cancelled" }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        else {
            return res.status(200).json({ message: 'Order Status Updated Successfully' }); // Return the updated service
        }
    } catch (error) {
        console.error('Error during User Updating:', error);
        return res.status(500).json({ message: 'Internal Server Error' }); // Return the updated service
    }
}








module.exports = {
    AddOrder,
    GetAllOrder,
    CheckOrderStatus,
    ChnageOrderStatus,
};
