const Comentarios = require('../modelos/models').comentarios;

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
  getComentario: async (dni) => {
    const filter = { dni: dni };
    let comentario;
    try {
      comentario = await Comentarios.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return comentario;
  },
  updateComentario: async (dni, input) => {
    let comentario;
    try {
      await Comentarios.updateOne({ dni: dni }, { $set: input });
      comentario = await Comentarios.findOne({ dni: dni });
      console.log(comentario);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return comentario;
  },
  deleteComentario: async (dni) => {
    try {
      await Comentarios.deleteOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
