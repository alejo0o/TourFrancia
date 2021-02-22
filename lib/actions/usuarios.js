const Usuarios = require('../modelos/models').usuarios;

const queries = {
  createUsuarios: async (input) => {
    let usuarios;
    try {
      usuarios = Usuarios.create(input);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return usuarios;
  },
  getUsuarios: async () => {
    const filter = {};
    try {
      let usuarios = await Usuarios.find(filter);
      return usuarios;
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
  },
  getUsuario: async (dni) => {
    const filter = { dni: dni };
    let usuario;
    try {
      usuario = await Usuarios.findOne(filter);
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return usuario;
  },
  updateUsuario: async (dni, input) => {
    let usuario;
    try {
      await Usuarios.updateOne({ dni: dni }, { $set: input }); //el update no devuelve el curso
      usuario = await Usuarios.findOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return usuario;
  },
  deleteUsuario: async (dni) => {
    try {
      await Usuarios.deleteOne({ dni: dni });
    } catch (error) {
      console.log(error);
      throw new Error('Fallo en la operacion del servidor');
    }
    return '200 Eliminado exitoso';
  },
};

module.exports = queries;
