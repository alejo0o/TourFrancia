const mongoose = require('../db'),
  Schema = mongoose.Schema;

const schemas = {
  participantes: new Schema({
    nombres: { type: String },
    apellidos: { type: String },
    fecha_de_nacimiento: { type: Date },
    nacionalidad: { type: String },
    equipo: { type: String },
    foto: { type: String },
    datos_relevantes: { type: String },
  }),

  etapas: new Schema({
    tipo: { type: String },
    numero: { type: Int16Array },
    fecha: { type: Date },
    salida: { type: String },
    llegada: { type: String },
    longitud: { type: Float32Array },
    desnivel_acumulado: { type: Float32Array },
    datos_relevantes_e: { type: String },
  }),

  ganadores: new Schema({
    nombres: { type: String },
    apellidos: { type: String },
    fecha_de_nacimiento: { type: Date },
    nacionalidad: { type: String },
    equipo: { type: String },
    numero_etapa: { type: String },
    datos_relevantes: { type: String },
  }),

  noticias: new Schema({
    portada: { type: String },
    titulo: { type: String },
    resumen: { type: String },
    noticia: { type: String },
  
  }),

  usuarios: new Schema({
    dni: { type: String },
    password: { type: String },
    admin: { type: Boolean },
  }),
  
  comentarios: new Schema({
    comentario: { type: String },
    numero_etapa: { type: String },
  }),
};

module.exports = schemas;