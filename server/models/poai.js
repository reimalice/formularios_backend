'use strict';
module.exports = (sequelize, DataTypes) => {
  var poai = sequelize.define('poai', {
    funcion_principal: DataTypes.TEXT,
    gestion: DataTypes.INTEGER,
    experiencia_general: DataTypes.DOUBLE,
    experiencia_especifica: DataTypes.DOUBLE,
    grado: DataTypes.STRING,
    descripcion_grado: DataTypes.STRING,
    evaluacion_total: DataTypes.DOUBLE,
    estado: DataTypes.STRING,
    id_cargo: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return poai;
};