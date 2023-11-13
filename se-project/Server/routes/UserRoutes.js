const Routes = require("express").Router();
const AuthenticationMiddleware = require('../utils/AuthenticationMiddleware')
const { GetUser, DeleteUser, UpdateUser, login, Wellcome, PostProjetUser } = require("../Controller/UserController");
const { GetAllServices1, DeleteFirst15Services, UpdateService ,GellAllServicesforall, PostProjetService } = require("../Controller/ServiceController");

// for the user routes
Routes.delete("/DeleteUser/:id", DeleteUser);

//  for my project SE    
Routes.put("/UpDateUser", AuthenticationMiddleware, UpdateUser); // put request for the user update
Routes.get("/GetUser", AuthenticationMiddleware, GetUser); // get request for the MyUser login loading login user data
Routes.post('/PostProjetUser', PostProjetUser);
Routes.post('/login', login);
Routes.post('/PostProjetService', AuthenticationMiddleware, PostProjetService);
Routes.put('/DeleteService/:id', AuthenticationMiddleware, DeleteFirst15Services);  // delete request for the service
Routes.get('/GetAllServicesForallUser', GellAllServicesforall);

module.exports = Routes;   // export the routes

