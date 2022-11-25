// LOCALHOST
module.exports = {
    HOST: "34.151.255.199",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "rede_solidaria",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

// RENDER
// module.exports = {
//   HOST: "dpg-cda31hqrrk09hiotu3t0-a.oregon-postgres.render.com",
//   USER: "senac",
//   PASSWORD: "p1RKylLs1wUnm3RCIAeizpxfE5iDRUvY",
//   DB: "rede__solidaria_db",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };