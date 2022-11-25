module.exports = (sequelize, Sequelize) => {
  const Doar = sequelize.define(
    "doar",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_classificacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estado: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dt_inicio: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dt_final: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      localizacao_geo: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      latitude: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Doar;
};
