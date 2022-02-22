require("dotenv").config();
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const { Student } = require("../models");

class AuthService {
  static register = async data => {
    console.log(data);
    return data
    // const { userid} = data;

    //   let test_user = await Student.find({ userid:userid });
    // if (test_user) {
    //   throw createError.BadRequest("Email taken");
    // }
    // data.password = bcrypt.hashSync(data.password, 8);
    // let user = await Student.create({
    //   userid: userid,
    //   password: data.password,
    // });
    // console.log(user);

    // data.accessToken = await jwt.signAccessToken(user);
    // return data;
  };

  static login = async data => {
    const { email, password } = data;

    const user = await Student.findOne({ email: email });
    if (!user) {
      throw createError.BadRequest("User not found");
    }

    const checkPass = bcrypt.compareSync(password, user.password);
    if (!checkPass) {
      throw createError.Unauthorized("Passwords dont match");
    }
    delete user.password;
    const accessToken = await jwt.signAccessToken(user);
    return { ...user, accessToken };
  };

  static all = async () => {
    return "hi";
    //   const allUsers = await Student.find();

    // return allUsers;
  };
}

module.exports = AuthService;
