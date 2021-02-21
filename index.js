const express = require('express');
const queries = require('./lib/actions/participantes');
const queries = require('./lib/actions/ganadores');
const queries = require('./lib/actions/comentarios');
const queries = require('./lib/actions/noticias');
const cors = require('cors');
var bodyParser = require('body-parser');

require('dotenv').config();

const { PORT } = process.env;

const app = express();
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
  res.send(await queries.getParticipantes());
});
//GetOne
app.get('/participantes/:dni', async (req, res) => {
  res.send(await queries.getParticipante(req.params.dni));
});
//Post
app.post('/participantes', async (req, res) => {
  res.send(await queries.createParticipantes(req.body));
});
//Update
app.put('/participantes/:dni', async (req, res) => {
  res.send(await queries.updateParticipante(req.params.dni, req.body));
});
//Delete
app.delete('/participantes/:dni', async (req, res) => {
  res.send(await queries.deleteParticipante(req.params.dni));
});

/*-------------------Ganadores-----------------*/
//GetAll
app.get('/ganadores', async (req, res) => {
  res.send(await queries.getGanadores());
});
//GetOne
app.get('/ganadores/:dni', async (req, res) => {
  res.send(await queries.getGanador(req.params.dni));
});
//Post
app.post('/ganadores', async (req, res) => {
  res.send(await queries.createGanadores(req.body));
});
//Update
app.put('/ganadores/:dni', async (req, res) => {
  res.send(await queries.updateGanador(req.params.dni, req.body));
});
//Delete
app.delete('/ganadores/:dni', async (req, res) => {
  res.send(await queries.deleteGanador(req.params.dni));
});


/*-------------------Comentarios-----------------*/
//GetAll
app.get('/comentarios', async (req, res) => {
  res.send(await queries.getComentarios());
});
//GetOne
app.get('/comentarios/:_id', async (req, res) => {
  res.send(await queries.getGanador(req.params._id));
});
//Post
app.post('/comentarios', async (req, res) => {
  res.send(await queries.createComentarios(req.body));
});
//Update
app.put('/comentarios/:_id', async (req, res) => {
  res.send(await queries.updateComentario(req.params._id, req.body));
});
//Delete
app.delete('/comentarios/:_id', async (req, res) => {
  res.send(await queries.deleteComentario(req.params._id));
});

/*-------------------Noticias-----------------*/
//GetAll
app.get('/noticias', async (req, res) => {
  res.send(await queries.getNoticias());
});
//GetOne
app.get('/noticias/:_id', async (req, res) => {
  res.send(await queries.getNoticia(req.params._id));
});
//Post
app.post('/noticias', async (req, res) => {
  res.send(await queries.createNoticias(req.body));
});
//Update
app.put('/noticias/:_id', async (req, res) => {
  res.send(await queries.updateNoticia(req.params._id, req.body));
});
//Delete
app.delete('/noticias/:_id', async (req, res) => {
  res.send(await queries.deleteNoticia(req.params._id));
});

//Instancia del servidor
app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
