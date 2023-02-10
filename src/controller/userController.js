/** @format */

import userService from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Missing inputs para",
    });
  }
  let userData = await userService.handleUserLogin(email, password);

  console.log(userData);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUser = async (req, res) => {
  let id = req.query.id;
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required parameters",
      users: [],
    });
  }
  let users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    errMessage: "ok",
    users: users,
  });
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};
let handleEditNewUser = async (req, res) => {
  let message = await userService.updateNewUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteNewUser = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "missing required parameters",
    });
  }
  let message = await userService.deleteNewUser(req.body.id);
  console.log(message);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    console.log(data);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);

    return res.status(200).json({
      errCode: -1,
      errMessage: "err all code from server",
    });
  }
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
  handleCreateNewUser: handleCreateNewUser,
  handleDeleteNewUser: handleDeleteNewUser,
  handleEditNewUser: handleEditNewUser,
  getAllCode: getAllCode,
};
