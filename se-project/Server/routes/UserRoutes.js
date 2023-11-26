const Routes = require("express").Router();
const AuthenticationMiddleware = require('../utils/AuthenticationMiddleware')
const { GetUser, DeleteUser, IDUser, login, AllData, PostProjetUser, AddProfilePic, AddProfilePicBYID, GetUserByID } = require("../Controller/UserController");
const { GetAllServices1, DeleteFirst15Services, UpdateService, GellAllServicesforall, PostProjetService } = require("../Controller/ServiceController");
const { AddOrder, GetAllOrder, CheckOrderStatus ,ChnageOrderStatus} = require("../Controller/OrderController");
const { AddMessage, GetAllMessages, GetAllMessages_2, GetAllMessages_1 } = require("../Controller/MessageControler");
const { Route } = require("react-router-dom");

// for the user routes
Routes.delete("/DeleteUser/:id", DeleteUser);
Routes.get('/getUserId', AuthenticationMiddleware, IDUser);
Routes.put("/AddProfilePic", AuthenticationMiddleware, AddProfilePic); // put request for the user update 
Routes.get('/GetUserByID', GetUserByID);
Routes.put('/AddProfilePicBYID', AddProfilePicBYID);


//  for my project SE    
Routes.get("/GetUser", AuthenticationMiddleware, GetUser); // get request for the MyUser login loading login user data
Routes.post('/PostProjetUser', PostProjetUser);
Routes.post('/login', login);
Routes.post('/PostProjetService', AuthenticationMiddleware, PostProjetService);
Routes.put('/DeleteService/:id', AuthenticationMiddleware, DeleteFirst15Services);  // delete request for the service
Routes.get('/GetAllServicesForallUser', GellAllServicesforall);
Routes.get('/GetAllServices', AuthenticationMiddleware, GetAllServices1); // get request for the service

//  adding New Order in the Database
Routes.post('/NewOrder', AuthenticationMiddleware, AddOrder)
Routes.get('/GetAllOrder', GetAllOrder); // get request for the order
Routes.post('/CheckOrder', AuthenticationMiddleware, CheckOrderStatus); // get request for the order 
Routes.put('/ChangeOrderStatus', ChnageOrderStatus); // put request for the user update 

//  adding New Message in the Database
Routes.post('/AddMessage', AddMessage);
Routes.get('/GetAllMessages_1', GetAllMessages_1); // get request for the order 
Routes.get('/GetAllMessages_2', GetAllMessages_2); // get request for the order 
Routes.get('/AllUsers', AllData); // get request for the order







module.exports = Routes;   // export the routes

