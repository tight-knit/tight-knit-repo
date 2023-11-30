const express = require("express");
const jobsController = require("../controllers/jobs");
const usersController = require("../controllers/users");
const locationController = require("../controllers/city");
const tagsController = require("../controllers/tags");

const router = express.Router();

// gets

// change route to /jobs
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

// posts
router.post("/jobs", jobsController.postJobs, (req, res) => {
  res.status(200).json({ msg: "jobs post successful" });
});

router.post("/users", usersController.postUser, (req, res) => {
  res.status(200).json({ msg: "users post successful" });
});

router.post("/location", locationController.postAllCities, (req, res) => {
  res.status(200).json({ msg: "cities post successful" });
});

router.post("/tags", tagsController.postAllTags, (req, res) => {
  res.status(200).json({ msg: "tags post successful" });
});

// 


module.exports = router;
