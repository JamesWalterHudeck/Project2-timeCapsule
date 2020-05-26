module.exports = function(sequelize, Datatypes) {
    var image = sequelize.define("Image", {
        imageName: Datatypes.STRING
    });

    image.associate = function(models) {
        image.belongsTo(models.Capsule, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return image;
};