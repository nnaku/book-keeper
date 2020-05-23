const router = require("express").Router();
const authRoutes = require("./auth");
const customerRoutes = require("./customers");
const eventRoutes = require("./events");

router.use("/auth", authRoutes);
router.use("/customers", customerRoutes);
router.use("/events", eventRoutes);

module.exports = router;
