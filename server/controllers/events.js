const { Op } = require("sequelize");
const Event = require("../models").models.Event;

async function getEvents(req, res, next) {
  try {
    const events = await Event.findAll({});
    res.json(events);
  } catch (e) {
    next(e);
  }
}

async function getEvent(req, res, next) {
  const { id } = req.params;
  try {
    const event = await Event.findOne({ where: { id } });
    if (!event) return res.status(404).send();
    res.json(event);
  } catch (e) {
    next(e);
  }
}

async function createEvent(req, res, next) {
  const { start, end, customer: Customer, item } = req.body;

  const eventPayload = { start, end, item, Customer };

  if (typeof customer === "number") {
    delete eventPayload.Customer;
    eventPayload.CustomerId = Customer;
  }

  try {
    const newEvent = await Event.create(eventPayload);
    res.json(newEvent);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getEvents,
  getEvent,
  createEvent,
};
