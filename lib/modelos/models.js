const mongoose = require('../db'),
  participantesSchema = require('../schemas/mongoSchemas').PARTICIPANTES;

const models = {
  PARTICIPANTES: mongoose.model('PARTICIPANTES', participantesSchema),
};

module.exports = models;
