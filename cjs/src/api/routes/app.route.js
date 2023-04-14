const express = require("express");

const { getAppController} = require('../controllers/app.controller')

let router = express.Router();

/* eslint-disable no-console */

router.get("/", getAppController);

module.exports = router;
