module.exports = (sequelize, DataTypes) => {
    let Image = sequelize.define("Image", {
        image: DataTypes.STRING
    });
    // Image.associate = function(models) {
    //     //Image belongs to Car
    //     Image.belongsTo(models.Car)
    // }
    return Image;
}