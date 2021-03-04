const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

require('dotenv').config();

const { PORT } = process.env;
//Modelos
const participantes = require('./lib/actions/participantes');
const ganadores = require('./lib/actions/ganadores');
const comentarios = require('./lib/actions/comentarios');
const noticias = require('./lib/actions/noticias');
const etapas = require('./lib/actions/etapas');
const usuarios = require('./lib/actions/usuarios');

const app = express();
app.use(cors()); //configuracion de cors
//bodyParser permite habilitar el envio de informacion por body ya sea urlencoded o json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Home
app.get('/', (req, res) => {
  res.send('Bienvenido');
});

/*-------------------Participantes-----------------*/
//GetAll
app.get('/participantes', async (req, res) => {
  try {
    res.send(await participantes.getParticipantes());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/participantes/:dni', async (req, res) => {
  try {
    res.send(await participantes.getParticipante(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/participantes', async (req, res) => {
  try {
    res.send(await participantes.createParticipantes(req.body, res));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/participantes/:dni', async (req, res) => {
  try {
    res.send(await participantes.updateParticipante(req.params.dni, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/participantes/:dni', async (req, res) => {
  try {
    res.send(await participantes.deleteParticipante(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});

/*-------------------Ganadores-----------------*/
//GetAll
app.get('/ganadores', async (req, res) => {
  try {
    res.send(await ganadores.getGanadores());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/ganadores/:dni', async (req, res) => {
  try {
    res.send(await ganadores.getGanador(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/ganadores', async (req, res) => {
  try {
    res.send(await ganadores.createGanadores(req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/ganadores/:dni', async (req, res) => {
  try {
    res.send(await ganadores.updateGanador(req.params.dni, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/ganadores/:dni', async (req, res) => {
  try {
    res.send(await ganadores.deleteGanador(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});

/*-------------------Comentarios-----------------*/
//GetAll
app.get('/comentarios', async (req, res) => {
  try {
    res.send(await comentarios.getComentarios());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/comentarios/:_id', async (req, res) => {
  try {
    res.send(await comentarios.getComentario(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/comentarios', async (req, res) => {
  try {
    res.send(await comentarios.createComentarios(req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/comentarios/:_id', async (req, res) => {
  try {
    res.send(await comentarios.updateComentario(req.params._id, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/comentarios/:_id', async (req, res) => {
  try {
    res.send(await comentarios.deleteComentario(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});

/*-------------------Noticias-----------------*/
//GetAll
app.get('/noticias', async (req, res) => {
  try {
    res.send(await noticias.getNoticias());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/noticias/:_id', async (req, res) => {
  try {
    res.send(await noticias.getNoticia(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/noticias', async (req, res) => {
  try {
    res.send(await noticias.createNoticias(req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/noticias/:_id', async (req, res) => {
  try {
    res.send(await noticias.updateNoticia(req.params._id, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/noticias/:_id', async (req, res) => {
  try {
    res.send(await noticias.deleteNoticia(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});

/*-------------------Etapas-----------------*/
//GetAll
app.get('/etapas', async (req, res) => {
  try {
    res.send(await etapas.getEtapas());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/etapas/:_id', async (req, res) => {
  try {
    res.send(await etapas.getEtapa(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/etapas', async (req, res) => {
  try {
    res.send(await etapas.createEtapas(req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/etapas/:_id', async (req, res) => {
  try {
    res.send(await etapas.updateEtapa(req.params._id, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/etapas/:_id', async (req, res) => {
  try {
    res.send(await etapas.deleteEtapa(req.params._id));
  } catch (error) {
    res.sendStatus(500);
  }
});

/*-------------------Usuarios-----------------*/
//GetAll
app.get('/usuarios', async (req, res) => {
  try {
    res.send(await usuarios.getUsuarios());
  } catch (error) {
    res.sendStatus(500);
  }
});
//GetOne
app.get('/usuarios/:dni', async (req, res) => {
  try {
    res.send(await usuarios.getUsuario(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Post
app.post('/usuarios', async (req, res) => {
  try {
    res.send(await usuarios.createUsuarios(req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Update
app.put('/usuarios/:dni', async (req, res) => {
  try {
    res.send(await usuarios.updateUsuario(req.params.dni, req.body));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Delete
app.delete('/usuarios/:dni', async (req, res) => {
  try {
    res.send(await usuarios.deleteUsuario(req.params.dni));
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get('/usuario/auth', async (req, res) => {
  try {
    let user = await usuarios.autenticacionUsuario(
      req.headers.authorization.split(':')[0],
      req.headers.authorization.split(':')[1]
    );
    res.send({
      usuario: user.dni,
      admin: user.admin,
    });
  } catch (error) {
    res.sendStatus(401);
  }
});

//Instancia del servidor
app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
