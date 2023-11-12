const MyUser = require('../Models/MyUser');
const jwt = require('jsonwebtoken');


// making the get api
async function GetUser(Req, Res) {
    try {
        const Id = Req.user.id;
        const Data = await MyUser.findById(Id);
        Res.status(200).json({ message: 'Succesfully loaded', Data: Data }); // Return the updated service
    } catch (error) {
        console.log(error);
        Res.status(500).json({ error: error.mesage })
    }
}
// Delete Api to Delete the Data from the Database
async function DeleteUser(Req, Res) {
    try {
        const Data = await MyUser.findByIdAndDelete(Req.params.id);
        Res.status(201).json(Data);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}
// Update Api to Update the Data in the Database
async function UpdateUser(req, res) {
    try {
        const userId = req.user.id;
        if (!userId) {
            console.log('User not authenticated');
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const ProfileImage = req.body.ProfileImage; // Get the profile image from the request body
        const service = await MyUser.updateOne({ _id: userId }, { $set: { ProfileImage: ProfileImage } });
        if (!service) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        } // If the service is not found, return a 404 error
        return res.status(200).json({ message: 'Profile Updated Successfully' }); // Return the updated service
    } catch (error) {
        console.error('Error during User Updating:', error);
        return res.status(500).json({ message: 'Internal Server Error' }); // Return the updated service
    }
}
// fuction for the user verfication 
async function login(req, res, next) {
    const { Email, Password } = req.body;
    try {
        const user = await MyUser.findOne({ Email });
        if (!user) return res.status(404).json({ error: 'User not found' });
        if (user.Password !== Password) return res.status(401).json({ error: 'Invalid credentials' });
        var token = GenerateToken(user);
        console.log(token);
        return res.status(200).json({ message: 'Logged in successfully', Email: Email, Name: user.Name, userid: user.id, token: token });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
async function Wellcome(req, res) {
    return res.status(200).json({ message: 'Wellcome Admin Bhai' });
}
// post request for the MyUser login
async function PostProjetUser(Req, Res) {
    try {
        const Data = Req.body;
        const user = await MyUser.findOne({ Email: Data.Email });
        if (user) return Res.status(409).json({ mesage: 'User already exists' });
        const result = await MyUser.create(Data);
        Res.status(201).json(result);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}
const GenerateToken = (user) => {
    const payload = {
        Email: user.Email,
        id: user._id,
    };
    const token = jwt.sign(payload, '652ec29f3beb5a545122b2ed2321@##*&^^');
    return token;
};


// Export all the functions 
module.exports = {
    GetUser,
    DeleteUser,
    UpdateUser,
    login,
    Wellcome,
    PostProjetUser,
};





