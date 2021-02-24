const Ganadores = require('../modelos/models').ganadores;

const queries = {
  createGanadores: async (input) => {
    let ganador;
    try {
      ganador = Ganadores.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return ganador;
  },
  getGanadores: async () => {
    const filter = {};
    try {
      let ganadores = await Ganadores.find(filter);
      return ganadores;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getGanador: async (dni) => {
    const filter = { dni: dni };
    let ganador;
    try {
      ganador = await Ganadores.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return ganador;
  },
  updateGanador: async (dni, input) => {
    let ganador;
    try {
      await Ganadores.updateOne({ dni: dni }, { $set: input });
      ganador = await Ganadores.findOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return ganador;
  },
  deleteGanador: async (dni) => {
    try {
      await Ganadores.deleteOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
