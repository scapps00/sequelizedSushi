module.exports = function(sequelize, DataTypes) {
	var Sushi = sequelize.define("Sushi", {
		id: { 
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		sushi_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
			allowNull: false
		}
	}, {
		freezeTableName: true,
		timestamps: false
	});
	return Sushi;
};