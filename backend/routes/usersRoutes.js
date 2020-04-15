const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.route("/").get(usersController.getAllUsers);
router.route("/:id").get(usersController.getUserById);

module.exports = router;
