const mongoose = require('../db'),
  participantesSchema = require('../schemas/mongoSchemas').participantes,
  etapasSchema = require('../schemas/mongoSchemas').etapas,
  ganadoresSchema = require('../schemas/mongoSchemas').ganadores,
  noticiasSchema = require('../schemas/mongoSchemas').noticias,
  usuariosSchema = require('../schemas/mongoSchemas').usuarios,
  comentariosSchema = require('../schemas/mongoSchemas').comentarios;

const models = {
  participantes: mongoose.model('participantes', participantesSchema),
  etapas: mongoose.model('etapas', etapasSchema),
  ganadores: mongoose.model('ganadores', ganadoresSchema),
  noticias: mongoose.model('noticias', noticiasSchema),
  usuarios: mongoose.model('usuarios', usuariosSchema),
  comentarios: mongoose.model('comentarios', comentariosSchema),
};

module.exports = models;
