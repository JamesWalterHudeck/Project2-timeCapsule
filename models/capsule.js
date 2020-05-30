module.exports = function(sequelize, DataTypes) {
    var Capsule = sequelize.define("Capsule", {
        capsuleName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        sealedTime: {
            type: DataTypes.TIME,
        },
        openTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        capsuleCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Capsule.associate = function(models) {
        Capsule.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });
        Capsule.hasMany(models.Image, {
            onDelete: "cascade",
        });
    };
    return Capsule;
};