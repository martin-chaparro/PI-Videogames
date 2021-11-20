const { Model, DataTypes } = require("sequelize");

class Videogame extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          }
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {}
}

module.exports = Videogame;