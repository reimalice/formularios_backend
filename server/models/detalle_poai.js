'use strict';
module.exports = (sequelize, DataTypes) => {
  var detalle_poai = sequelize.define('detalle_poai', {
    descripcion: DataTypes.STRING,
    resultado: DataTypes.STRING,
    evaluacion: DataTypes.STRING,
    tipo: DataTypes.STRING, 
    nivel: DataTypes.INTEGER,
    medio: DataTypes.STRING,
    observacion: DataTypes.STRING,
    id_poai: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return detalle_poai;
};