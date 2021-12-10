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
					defaultValue: DataTypes.NOW,
				},
				rating: {
					type: DataTypes.FLOAT,
					allowNull: true,
					defaultValue: 1,
				},
				background_image: {
					type: DataTypes.STRING,
					allowNull: false,
					defaultValue:
						'https://res.cloudinary.com/dm7fla3lz/image/upload/v1638891886/wallpaperflare.com_wallpaper_lrwnbo.jpg',
					set(value) {
						if (value === '') {
							this.setDataValue(
								'background_image',
								'https://res.cloudinary.com/dm7fla3lz/image/upload/v1638891886/wallpaperflare.com_wallpaper_lrwnbo.jpg'
							);
						}else{

							this.setDataValue('background_image', value);
						}
					},
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
		this.belongsToMany(models.Genre, {
			as:'genres', 
			through: 'videogames_genres' });
	}
}

module.exports = Videogame;
