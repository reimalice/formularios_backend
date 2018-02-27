const Usuario = require('../models').Usuario;
const Empleado = require('../models').Empleado;

module.exports = {




    create(req, res) {
        return Usuario
            .create({
                username: req.body.username,
            })
            .then(usuario => res.status(201).send(usuario))
            .catch(error => res.status(400).send(error));
    },
    
    list(req, res) {
        return Usuario
          .findAll({
            include: [{
              model: Empleado,
              as: 'empleado',
            }],
          })
          .then(usuarios => res.status(200).send(usuarios))
          .catch(error => res.status(400).send(error));
    }
};