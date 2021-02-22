const Comentarios = require('../modelos/models').comentarios;

const { ObjectId } = require('mongodb');

const queries = {
  createComentarios: async (input) => {
    let comentario;
    try {
      comentario = Comentarios.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return comentario;
  },
  getComentarios: async () => {
    const filter = {};
    try {
      let comentarios = await Comentarios.find(filter);
      console.log('comentarios', comentarios);
      return comentarios;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getComentario: async (id) => {
    const filter = { _id: ObjectId(id) };
    let comentario;
    try {
      comentario = await Comentarios.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return comentario;
  },
  updateComentario: async (_id, input) => {
    let comentario;
    try {
      await Comentarios.updateOne({ _id: _id }, { $set: input });
      comentario = await Comentarios.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return comentario;
  },
  deleteComentario: async (_id) => {
    try {
      await Comentarios.deleteOne({ _id: _id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
