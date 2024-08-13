var express = require('express');
var router = express.Router();
const { Area, Materia } = require('../models');

// Rutas para Areas

// Obtener todas las áreas
router.get('/areas', async (req, res) => {
  try {
    const areas = await Area.findAll();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rutas para Materias

// Guardar una nueva materia
router.post('/materias', async (req, res) => {
  try {
    const { nombre, creditos, descripcion, id_area } = req.body;
    const materia = await Materia.create({ nombre, creditos, descripcion, id_area });
    res.json(materia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las materias con su área respectiva
router.get('/materias', async (req, res) => {
  try {
    const materias = await Materia.findAll({
      include: {
        model: Area,
        as: 'area',
        attributes: ['nombre']  // Incluye solo el nombre del área
      }
    });
    res.json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
