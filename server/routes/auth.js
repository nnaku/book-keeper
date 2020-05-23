const authRouter = require("express").Router();

const { login, logout } = require("../controllers/auth");

authRouter.get("/", (req, res, next) => {
  res.json({ user: req.session.user });
});
authRouter.post("/login", login);
authRouter.delete("/login", logout);

module.exports = authRouter;
