const Noticias = require('../modelos/models').noticias;

const queries = {
  createNoticias: async (input) => {
    let noticia;
    try {
      noticia = Noticias.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
  },
  getNoticias: async () => {
    const filter = {};
    try {
      let noticias = await Noticias.find(filter);
      console.log('noticias', noticias);
      return noticias;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getNoticia: async (_id) => {
    const filter = { _id: _id };
    let noticia;
    try {
      noticia = await Noticias.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
  },
  updateNoticia: async (_id, input) => {
    let noticia;
    try {
      await Noticias.updateOne({ _id: _id }, { $set: input });
      noticia = await Noticias.findOne({ _id: _id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
  },
  deleteNoticia: async (_id) => {
    try {
      await Noticias.deleteOne({ _id: _id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
