const {Sequelize} = require('sequelize');

// const {config} = require('../config/config');
const setupModels = require('../db/models');

// const USER= encodeURIComponent(config.dbUser);
// const PASSWORD= encodeURIComponent(config.dbPassword);
// // const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

// // const sequelize= new Sequelize(URI,{
// //   dialect:'postgres',
// //   logging:true,
// // });
const sequelize = new Sequelize(
  'railway', //Nombre de la base
  'postgres', //Usuario
  'B5Cd4AD3fD*BgD*ef3C3eA-aE4635a13', // Password
  {
      host: 'roundhouse.proxy.rlwy.net',
      dialect: 'postgres',
      port: 20209
  }
);

setupModels(sequelize);
sequelize.sync();
// module.exports = conexion;
module.exports= sequelize;
