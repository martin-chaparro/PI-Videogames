const { Model, DataTypes } = require('sequelize');

class Genre extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					primaryKey: true,
					allowNull: false,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.belongsToMany(models.Videogame, { through: 'videogames_genres' });
	}
}

module.exports = Genre;
