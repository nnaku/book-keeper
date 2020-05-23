const customersRouter = require("express").Router();
const authMiddleware = require("../middleware/auth");

const {
  findCustomer,
  createCustomer,
  getCustomers,
} = require("../controllers/customers");

customersRouter.use(authMiddleware);
customersRouter.get("/", getCustomers);
customersRouter.get("/:phoneOrEmail", findCustomer);
customersRouter.post("/", createCustomer);

module.exports = customersRouter;
