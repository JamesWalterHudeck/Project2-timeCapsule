module.exports = function(sequelize, DataTypes) {
    var Capsule = sequelize.define("Capsule", {
        capsuleName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sealedTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        openTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        capsuleCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
        password: {
            type: DataTypes.STRING,
            allowNull: false
          },
        movies: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Capsule.associate = function(models) {
        Capsule.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
              }
        });
        Capsule.hasMany(models.Image, {
            onDelete: "cascade"
        });

    };

};