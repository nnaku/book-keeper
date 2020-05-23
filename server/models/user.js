const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    return super
      .init(
        {
          email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        },
        {
          sequelize,
        }
      )
      .registerHooks();
  }

  static registerHooks() {
    this.beforeSave((user) => {
      console.log("beforeSave");
      if (user.changed("password") && user.password) {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hash(user.password, salt).then((hashedPw) => {
          user.password = hashedPw;
        });
      }
    });
    return this;
  }

  // pw validation as instance method
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }

  toJSON() {
    const { password, ...rest } = this.get();
    return rest;
  }
}

module.exports = User;
