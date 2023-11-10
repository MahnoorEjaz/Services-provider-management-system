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
        console.log(data.map((service) => service.Gallary.map((image) => image.data)));
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}






// Delete Api to Delete the Data from the Database 
async function DeleteFirst15Services(req, res) {
  try {
      const userId = "65492d7645f3221c1b30ada4";
      // Find the first two documents with the specified createdBy user ID
      const documentsToDelete = await Service.find({ createdBy: userId }).limit(2);
      if (documentsToDelete.length === 0) {
          return res.status(404).json({ message: 'No matching documents found' });
      }
      // Delete the found documents
      const deletionResult = await Service.deleteMany({ _id: { $in: documentsToDelete.map(doc => doc._id) }});
      console.log(deletionResult);
      res.status(200).json({ message: 'Deleted Successfully' });
  } catch (error) {
      res.status(500).json({ message: error.message });
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
        const data = base64Image
        return {
          data,
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
    DeleteFirst15Services,
    UpdateService,
    PostProjetService,

};





