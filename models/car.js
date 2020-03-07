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
    return Car;
}