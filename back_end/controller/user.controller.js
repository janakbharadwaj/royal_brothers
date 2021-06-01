const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const { check, validationResult } = require("express-validator");

router.post(
  "/users/signup",
  [
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Password should consist of minimum 8 characters"
    ).isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.send({ message: errors.errors[0].msg });
    }

    const { first_name, last_name, email, password } = req.body;

    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.send({
        message: "User already exists",
      });
    }

    user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.status(200).json({ message: "Success", userId: user.id });
  }
);

//login

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({
    email,
  });
  if (!user) {
    return res.send({
      isAuth: false,
      message: "User does not exist",
    });
  }

  if (user.password !== password) {
    return res.send({
      isAuth: false,
      message: "Incorrect Password",
    });
  }
  res.status(200).json({ message: "Success", userData: user, isAuth: true });
});

module.exports = router;
