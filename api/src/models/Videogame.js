const { Model, DataTypes } = require('sequelize');

class Videogame extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					primaryKey: true,
					allowNull: false,
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				description: {
					type: DataTypes.TEXT,
					allowNull: false,
				},
				released: {
					type: DataTypes.DATEONLY,
					allowNull: true,
					defaultValue: DataTypes.NOW
				},
				rating: {
					type: DataTypes.FLOAT,
					allowNull: true,
					defaultValue:0
				},
				background_image:{
					type: DataTypes.STRING,
					allowNull:false,
					defaultValue:'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
					set(value){
						if (value === '') {
							this.setDataValue(
								'background_image',
								'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
							)
						}
					}
				},
				platforms: {
					type: DataTypes.ARRAY(DataTypes.JSON),
					allowNull: false,
				},
				inDb: {
					type: DataTypes.BOOLEAN,
					defaultValue: true,
					allowNull: false,
				},
			},
			{
				sequelize,
			}
		);
	}

	static associate(models) {
		this.belongsToMany(models.Genre, { through: 'videogames_genres' });
	}
}

module.exports = Videogame;
