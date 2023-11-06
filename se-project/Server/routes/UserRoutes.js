const Routes = require("express").Router();
const AuthenticationMiddleware = require('../utils/AuthenticationMiddleware')
const { GetAllUser, DeleteUser, UpdateUser, login, Wellcome ,PostProjetUser } = require("../Controller/UserController");
const { GetAllServices ,DeleteService ,UpdateService  ,PostProjetService} = require("../Controller/ServiceController");

// for the user routes
Routes.get("/GetAllUsers", GetAllUser);
Routes.delete("/DeleteUser/:id", DeleteUser);
Routes.put("/UpDateUser/:id", UpdateUser);

//  for my project SE    
Routes.post('/PostProjetUser', PostProjetUser);
Routes.post('/login', login);
Routes.post('/PostProjetService', AuthenticationMiddleware, PostProjetService);
Routes.get('/GetAllServices', AuthenticationMiddleware,GetAllServices);

module.exports = Routes;   // export the routes

