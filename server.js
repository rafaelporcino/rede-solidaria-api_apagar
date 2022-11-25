const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// analisar solicitações de tipo de conteúdo - application/json
app.use(express.json());

// analisar solicitações de tipo de conteúdo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// PROD ENV
const db = require("./app/models");
db.sequelize.sync();

// DEV ENV
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop & re-sync db.");
// });

// rota simples
app.get("/", (req, res) => {
  res.json({ message: "Rede Solidaria está online." });
});

require("./app/routes/doar.routes")(app);

// definir porta, ouvir solicitações
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
