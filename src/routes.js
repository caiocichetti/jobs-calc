const express = require('express');
const routes = express.Router();
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController')
const DashboardController = require('./controllers/DashboardController');

<<<<<<< HEAD
routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)
 
module.exports = routes;
=======
const viewsPath = `${__dirname}/views/`;

routes.get('/', (req, res) => res.render(`${viewsPath}/index`));
routes.get('/job', (req, res) => res.render(`${viewsPath}/job`));
routes.get('/job/edit', (req, res) => res.render(`${viewsPath}/job-edit`));
routes.get('/profile', (req, res) => res.render(`${viewsPath}/profile`));

module.exports = routes;
>>>>>>> parent of e572d48... feat: rendering data in html with ejs
