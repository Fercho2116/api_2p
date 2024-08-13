'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define la relación muchos a uno con el modelo Area
      Materia.belongsTo(models.Area, {
        foreignKey: 'id_area',
        as: 'area'
      });
    }
  }
  
  Materia.init({
    nombre: DataTypes.STRING,
    creditos: DataTypes.INTEGER,
    descripcion: DataTypes.TEXT,
    id_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'materias',
  });

  return Materia;
};
