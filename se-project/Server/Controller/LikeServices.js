const LikeGig = require('../Models/LikeGig');


async function LikeGigService(req, res) {
    try {
        const UserID = req.user.id;
        const ServiceID = req.body.ServiceID;
        console.log(UserID);
        console.log(ServiceID);
        const newLikeGig = new LikeGig({
            UserID: UserID,
            ServiceID: ServiceID,
            like: true
        });
        const result = await newLikeGig.save();
        return res.status(200).json({ message: 'LikeGig Added Successfully', data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
async function RemoveLikeGigService(req, res) {
    try {
        const UserID = req.user.id;
        const ServiceID = req.query.ID;
        const DELETELike = await LikeGig.deleteOne({ UserID: UserID, ServiceID: ServiceID });
        if (!DELETELike) return res.status(404).json({ message: 'LikeGig Not Found' });
        if (DELETELike.n === 0) return res.status(404).json({ message: 'LikeGig Not Found' }); // if the deleted count is 0 then the user is not found
        return res.status(200).json({ message: 'LikeGig Removed Successfully', data: DELETELike });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    LikeGigService,
    RemoveLikeGigService
}
