'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define la relación uno a muchos con el modelo Materia
      Area.hasMany(models.Materia, {
        foreignKey: 'id_area',
        as: 'materias'
      });
    }
  }

  Area.init({
    nombre: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Area',
  });

  return Area;
};
