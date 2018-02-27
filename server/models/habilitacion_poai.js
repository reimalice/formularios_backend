'use strict';
module.exports = (sequelize, DataTypes) => {
  var habilitacion_poai = sequelize.define('habilitacion_poai', {
    gestion: DataTypes.INTEGER,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return habilitacion_poai;
};