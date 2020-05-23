const { Model, DataTypes } = require("sequelize");

class Event extends Model {
  static init(sequelize) {
    return super
      .init(
        {
          start: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          end: {
            type: DataTypes.DATE,
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      )
      .registerHooks();
  }

  static associate(models) {
    this.myAssociation = this.belongsTo(models.Customer);
  }

  static registerHooks() {
    return this;
  }
}

module.exports = Event;
