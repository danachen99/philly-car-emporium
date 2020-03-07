module.exports = (sequelize, DataTypes) => {
    let Price = sequelize.define("Price", {
        price: DataTypes.INTEGER
    });
    return Price;
}