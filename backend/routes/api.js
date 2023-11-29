const express = require("express");
const jobsController = require("../controllers/jobs");
const usersController = require("../controllers/users");
const locationController = require("../controllers/city");
const tagsController = require('../controllers/tags');

const router = express.Router();

router.get("/", jobsController.getJobs, (req, res) => {
  res.status(200).json(res.locals.getJobs);
});

router.get("/users", usersController.getAllUsers, (req, res) => {
  res.status(200).json(res.locals.getAllUsers);
});

router.get("/users/:id", usersController.getUser, (req, res) => {
  res.status(200).json(res.locals.getUser);
});

router.get("/location", locationController.getAllCities, (req, res) => {
  res.status(200).json(res.locals.getAllCities);
});

router.get("/tags", tagsController.getAllTags, (req, res) => {
  res.status(200).json(res.locals.getAllTags);
});

module.exports = router;
