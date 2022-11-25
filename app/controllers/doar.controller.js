const db = require("../models");
const Doar = db.doar;
const Op = db.Sequelize.Op;

// Criar e salvar uma nova doação
exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_produto) {
    res.status(400).send({
      message: "O conteúdo não pode ficar vazio!",
    });
    return;
  }

  // Criar uma doação
  const doacao = {
    id_produto: req.body.id_produto,
    id_classificacao: req.body.id_classificacao,
    id_status: req.body.id_status,
    id_usuario: req.body.id_usuario,
    estado: req.body.estado,
    cidade: req.body.cidade,
    logradouro: req.body.logradouro,
    numero: req.body.numero,
    dt_inicio: req.body.dt_inicio,
    dt_final: req.body.dt_final,
    localizacao_geo: req.body.localizacao_geo,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  };

  // Salvar doação no banco de dados
  Doar.create(doacao)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao criar a Doação..",
      });
    });
};

// Recupere todas as doações do banco de dados.
exports.findAll = (req, res) => {
  const id = req.query.id_produto;
  var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;

  Doar.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao recuperar as doações.",
      });
    });
};

// Encontre uma única doação com um ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doar.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível encontrar a doação com ID=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar a doação com id=" + id,
      });
    });
};

// Atualizar uma doação pelo id na solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  Doar.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Atualizar uma doação pelo id na solicitação.",
        });
      } else {
        res.send({
          message: `Não é possível atualizar a doação com ID=${id}. Talvez a doação não tenha sido encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar a doação com id=" + id,
      });
    });
};

// Excluir uma doação com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  Doar.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "a doação foi excluída com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível excluir a doação com ID=${id}. Talvez a doação não tenha sido encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir a doação com ID=" + id,
      });
    });
};

// Excluir todas as doações do banco de dados.
exports.deleteAll = (req, res) => {
  Doar.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} as doações foram excluídas com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro ao remover todas as doações.",
      });
    });
};

// encontrar todas as doações publicadas
// exports.findAllPublished = (req, res) => {
//   Doar.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Ocorreu algum erro ao recuperar as doações.",
//       });
//     });
// };
