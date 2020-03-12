module.exports = (sequelize, DataTypes) => {
    let Car = sequelize.define("Car", {
        year: DataTypes.INTEGER,
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        manufacturer: DataTypes.STRING,
        engine: DataTypes.STRING,
        trim: DataTypes.STRING,
        transmission: DataTypes.STRING
    });
    Car.associate = function(models) {
        //Associating Car with Image
        //When Car is deleted, also delete any associating Image
        Car.hasOne(models.Image, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: true
            }
        })
    }
    return Car;
}