const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/users", getUsers);

router.post("/createUser", createUser);

router.delete("/deleteUser/:userId", deleteUser);

module.exports = router;
