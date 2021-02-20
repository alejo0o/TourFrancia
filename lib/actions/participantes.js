const Participantes = require('../modelos/models').participantes;

const queries = {
  createParticipantes: async (input) => {
    let participante;
    try {
      participante = Participantes.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return participante;
  },
  getParticipantes: async () => {
    const filter = {};
    try {
      let participantes = await Participantes.find(filter);
      console.log('participantes', participantes);
      return participantes;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getParticipante: async (dni) => {
    const filter = { dni: dni };
    let participante;
    try {
      participante = await Participantes.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return participante;
  },
  updateParticipante: async (dni, input) => {
    let participante;
    try {
      await Participantes.updateOne({ dni: dni }, { $set: input }); //el update no devuelve el curso
      participante = await Participantes.findOne({ dni: dni });
      console.log(participante);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return participante;
  },
  deleteParticipante: async (dni) => {
    try {
      await Participantes.deleteOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
