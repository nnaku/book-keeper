const eventsRouter = require("express").Router();

const { getEvents, getEvent, createEvent } = require("../controllers/events");

eventsRouter.get("/", getEvents);
eventsRouter.post("/", createEvent);
eventsRouter.get("/:id", getEvent);

module.exports = eventsRouter;
