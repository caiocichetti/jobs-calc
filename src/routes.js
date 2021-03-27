const express = require('express');
const routes = express();

const viewsPath = `${__dirname}/views/`;

const profile = {
  name: 'Caio Cichetti',
  avatar: 'https://avatars.githubusercontent.com/u/58996814?v=4',
  'monthly-budget': 2000,
  'days-per-week': 5,
  'hours-per-day': 6,
  'vacation-per-year': 1,
};

routes.get('/', (req, res) => res.render(`${viewsPath}/index`));
routes.get('/job', (req, res) => res.render(`${viewsPath}/job`));
routes.get('/job/edit', (req, res) => res.render(`${viewsPath}/job-edit`));
routes.get('/profile', (req, res) =>
  res.render(`${viewsPath}/profile`, { profile })
);

module.exports = routes;
