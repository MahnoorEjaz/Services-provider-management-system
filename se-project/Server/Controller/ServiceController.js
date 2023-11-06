const MyUser = require('../Models/MyUser');
const Service = require('../Models/AddNewService');


// making the get api
async function GetAllServices(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User not authenticated' }); 
        }
        const userId = req.user.id;
        const user = await MyUser.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const data = await Service.find({ createdBy: userId });
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}






// Delete Api to Delete the Data from the Database
async function DeleteService(Req, Res) {
    try {
        const Data = await Service.findByIdAndDelete(Req.params.id);
        Res.status(201).json(Data);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}
// Update Api to Update the Data in the Database
async function UpdateService(Req, Res) {
    try {
        const Result = await Service.findByIdAndUpdate(Req.params.id, Req.body, { new: true });
        Res.status(201).json(Result);
    } catch (error) {
        Res.status(500).json({ error: error.mesage })
    }
}


// Create a new service without images and with user reference
async function PostProjetService(req, res) { 
    try { 
      const { ServiceTitle, Name, BasicPrice, Tags, ServiceType, Description, Gallary } = req.body;
      // Extract user ID from the token payload (assuming it's already implemented)
      const userId = req.user.id;
      const user = await MyUser.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }     
      // Decode the base64 image data and create an array of image objects
      const imageObjects = Gallary.map((base64Image) => {
        const data = Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
        const contentType = base64Image.split(';')[0].split(':')[1];
        return {
          data,
          contentType,
        };
      });
      // Create a new Service instance with the image data
      const newService = new Service({
        ServiceTitle,
        Name,
        BasicPrice,
        Tags,
        ServiceType,
        Description,
        Gallary: imageObjects, // Save an array of image objects in the Gallary field
        createdBy: user._id,
      });
      const result = await newService.save();
      res.status(201).json({ result, message: 'Service created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating service', error });
    }
  }
  
  





// Export all the functions 
module.exports = {
    GetAllServices,
    DeleteService,
    UpdateService,
    PostProjetService,

};





