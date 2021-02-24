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
  res.send(await participantes.getParticipantes());
});
//GetOne
app.get('/participantes/:dni', async (req, res) => {
  res.send(await participantes.getParticipante(req.params.dni));
});
//Post
app.post('/participantes', async (req, res) => {
  res.send(await participantes.createParticipantes(req.body));
});
//Update
app.put('/participantes/:dni', async (req, res) => {
  res.send(await participantes.updateParticipante(req.params.dni, req.body));
});
//Delete
app.delete('/participantes/:dni', async (req, res) => {
  res.send(await participantes.deleteParticipante(req.params.dni));
});

/*-------------------Ganadores-----------------*/
//GetAll
app.get('/ganadores', async (req, res) => {
  res.send(await ganadores.getGanadores());
});
//GetOne
app.get('/ganadores/:dni', async (req, res) => {
  res.send(await ganadores.getGanador(req.params.dni));
});
//Post
app.post('/ganadores', async (req, res) => {
  res.send(await ganadores.createGanadores(req.body));
});
//Update
app.put('/ganadores/:dni', async (req, res) => {
  res.send(await ganadores.updateGanador(req.params.dni, req.body));
});
//Delete
app.delete('/ganadores/:dni', async (req, res) => {
  res.send(await ganadores.deleteGanador(req.params.dni));
});

/*-------------------Comentarios-----------------*/
//GetAll
app.get('/comentarios', async (req, res) => {
  res.send(await comentarios.getComentarios());
});
//GetOne
app.get('/comentarios/:_id', async (req, res) => {
  res.send(await comentarios.getComentario(req.params._id));
});
//Post
app.post('/comentarios', async (req, res) => {
  res.send(await comentarios.createComentarios(req.body));
});
//Update
app.put('/comentarios/:_id', async (req, res) => {
  res.send(await comentarios.updateComentario(req.params._id, req.body));
});
//Delete
app.delete('/comentarios/:_id', async (req, res) => {
  res.send(await comentarios.deleteComentario(req.params._id));
});

/*-------------------Noticias-----------------*/
//GetAll
app.get('/noticias', async (req, res) => {
  res.send(await noticias.getNoticias());
});
//GetOne
app.get('/noticias/:_id', async (req, res) => {
  res.send(await noticias.getNoticia(req.params._id));
});
//Post
app.post('/noticias', async (req, res) => {
  res.send(await noticias.createNoticias(req.body));
});
//Update
app.put('/noticias/:_id', async (req, res) => {
  res.send(await noticias.updateNoticia(req.params._id, req.body));
});
//Delete
app.delete('/noticias/:_id', async (req, res) => {
  res.send(await noticias.deleteNoticia(req.params._id));
});

/*-------------------Etapas-----------------*/
//GetAll
app.get('/etapas', async (req, res) => {
  res.send(await etapas.getEtapas());
});
//GetOne
app.get('/etapas/:_id', async (req, res) => {
  res.send(await etapas.getEtapa(req.params._id));
});
//Post
app.post('/etapas', async (req, res) => {
  res.send(await etapas.createEtapas(req.body));
});
//Update
app.put('/etapas/:_id', async (req, res) => {
  res.send(await etapas.updateEtapa(req.params._id, req.body));
});
//Delete
app.delete('/etapas/:_id', async (req, res) => {
  res.send(await etapas.deleteEtapa(req.params._id));
});

/*-------------------Usuarios-----------------*/
//GetAll
app.get('/usuarios', async (req, res) => {
  res.send(await usuarios.getUsuarios());
});
//GetOne
app.get('/usuarios/:dni', async (req, res) => {
  res.send(await usuarios.getUsuario(req.params.dni));
});
//Post
app.post('/usuarios', async (req, res) => {
  res.send(await usuarios.createUsuarios(req.body));
});
//Update
app.put('/usuarios/:dni', async (req, res) => {
  res.send(await usuarios.updateUsuario(req.params.dni, req.body));
});
//Delete
app.delete('/usuarios/:dni', async (req, res) => {
  res.send(await usuarios.deleteUsuario(req.params.dni));
});

//Instancia del servidor
app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
