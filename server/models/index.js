const { Sequelize, Op } = require("sequelize");

const models = {
  User: require("./user"),
  Customer: require("./customer"),
  Event: require("./event"),
};

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: `${process.cwd()}/sqlite.db`,
});

Object.values(models)
  .map((m) => m.init(sequelize))
  .filter((m) => typeof m.associate === "function")
  .forEach((m) => m.associate(models));

sequelize.sync({ force: true });

module.exports = { sequelize, models };
// ;
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });
