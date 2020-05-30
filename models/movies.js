module.exports = function (sequelize, DataTypes) {
  var Movies = sequelize.define("Movies", {
    movieTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    moviePoster: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Movies.associate = function (models) {
    Movies.belongsTo(models.Capsule, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Movies;
};
