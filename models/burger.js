module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a burger from being entered if it doesn't
      // have a text value
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devoured value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Burger;
};
