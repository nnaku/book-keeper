const { Model, DataTypes } = require("sequelize");

class Customer extends Model {
  static init(sequelize) {
    return super
      .init(
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          phone: {
            type: DataTypes.STRING,
            unique: true,
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
          },
        },
        {
          sequelize,
          validate: {
            emailOrPhone() {
              console.log(this.email, this.phone, this.name);
              if (!this.email && !this.phone) {
                throw new Error("Either email or phone is required");
              }
            },
          },
        }
      )
      .registerHooks();
  }

  static registerHooks() {
    return this;
  }
}

module.exports = Customer;
