const { Op } = require("sequelize");
const Customer = require("../models").models.Customer;

async function createCustomer(req, res, next) {
  const { name, email, phone } = req.body;
  try {
    const newCustomer = await Customer.create({ name, email, phone });
    res.json(newCustomer);
  } catch (e) {
    next(e);
  }
}

async function findCustomer(req, res, next) {
  const { phoneOrEmail } = req.params;
  try {
    const customer = await Customer.findOne({
      where: {
        [Op.or]: {
          email: { [Op.eq]: phoneOrEmail },
          phone: { [Op.eq]: phoneOrEmail },
        },
      },
    });

    if (customer === null) {
      return next("not found");
    }
    res.json(customer);
  } catch (e) {
    next(e);
  }
}

async function getCustomers(req, res, next) {
  try {
    const customers = await Customer.findAll({});
    res.json(customers);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  findCustomer,
  getCustomers,
  createCustomer,
};
