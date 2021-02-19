const mongoose = require('../db'),
  Schema = mongoose.Schema;

const schemas = {
  PARTICIPANTES: new Schema({
    NOMBRES: { type: String },
    APELLIDOS: { type: String },
    FECHA_DE_NACIMIENTO: { type: Date },
    NACIONALIDAD: { type: String },
    EQUIPO: { type: String },
    FOTO: { type: String },
    DATOS_RELEVANTES: { type: String },
  }),
};

module.exports = schemas;
