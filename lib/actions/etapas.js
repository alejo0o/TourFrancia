const Etapas = require('../modelos/models').etapas;

const queries = {
  createEtapas: async (input) => {
    let etapa;
    try {
      etapa = Etapas.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return etapa;
  },
  getEtapas: async () => {
    const filter = {};
    try {
      let etapas = await Etapas.find(filter);
      return etapas;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getEtapa: async (id) => {
    const filter = { _id: id };
    let etapa;
    try {
      etapa = await Etapas.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return etapa;
  },
  updateEtapa: async (id, input) => {
    let etapa;
    try {
      await Etapas.updateOne({ _id: id }, { $set: input }); //el update no devuelve el curso
      etapa = await Etapas.findOne({ _id: id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return etapa;
  },
  deleteEtapa: async (id) => {
    try {
      await Etapas.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
