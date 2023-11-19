const { User } = require("../models");

const getUsers = async (_, res) => {
  try {
    const user = await User.findAll();

    if (!user) throw new Error("we have no users in the database");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.destroy(req.params.userId);

    if (deleteUser)
      throw new Error("user either does not exist or has already been deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createUser, deleteUser, getUsers };
