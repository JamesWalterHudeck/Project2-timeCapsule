module.exports = function(sequelize, Datatypes) {
    var Image = sequelize.define("Image", {
        imageName: Datatypes.DATA
    });

Image.associate = function(models) {
    Image.belongsTo(models.Capsule, {
        foreignKey: {
            allowNull: false
        }
    });
};

    return Image;
};