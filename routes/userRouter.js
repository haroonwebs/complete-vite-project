const route = require("express").Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { middleware, admin } = require("../middleware");

route.get("/getAllUsers", middleware, getAllUsers);
route.post("/createUser", createUser);
route.delete("/deleteUser", admin, deleteUser);
route.put("/updateUser", middleware, updateUser);

module.exports = route;
