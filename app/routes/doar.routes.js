module.exports = app => {
    const doar = require("../controllers/doar.controller.js");
  
    var router = require("express").Router();
  
    // Cria uma nova Doação
    router.post("/", doar.create);
  
    // Recuperar todas as doações
    router.get("/", doar.findAll);
  
    // Recuperar todas as doações publicadas
    // router.get("/published", doar.findAllPublished);
  
    // Recuperar uma única Doação com id
    router.get("/:id", doar.findOne);
  
    // Atualiza uma doação com id
    router.put("/:id", doar.update);
  
    // Excluir uma doação com id
    router.delete("/:id", doar.delete);
  
    // Excluir todas as doações
    router.delete("/", doar.deleteAll);
  
    app.use("/api/doar", router);
  };