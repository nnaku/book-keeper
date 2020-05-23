function authMiddleware(req, res, next) {
  console.log("authMiddleware");
  if (!req.session.user) return res.status(401).send();
  next();
}

module.exports = authMiddleware;
