const usuariosController = require('../controllers').usuarios;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Usuarios API!',
  }));

  app.post('/api/usuarios', usuariosController.create);

  app.get('/api/usuarios', usuariosController.list);
};