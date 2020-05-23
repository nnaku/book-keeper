const { Op } = require("sequelize");
const User = require("../models").models.User;

async function login(req, res, next) {
  // check if login info exist
  const { email, password } = req.body;
  if (!email) next("email required");
  if (!password) next("password required");

  try {
    // find user from db
    const user = await User.findOne({ where: { email } });

    // if user is not falsy then validate password also.
    const validUserAndPassword =
      user && (await user.validatePassword(password));

    // if invalid user of password.
    if (!validUserAndPassword)
      return res.status(401).json({ message: "wrong password or email" });

    req.session.regenerate(function (err) {
      // will have a new session here
      // set session.user
      req.session.user = user.toJSON();
      // return 201 for new session created.
      return res.status(201).send();
    });
  } catch (e) {
    next(e);
  }
}

function logout(req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      res.status(500).json(err);
    }

    res.send();
  });
}

module.exports = {
  login,
  logout,
};
