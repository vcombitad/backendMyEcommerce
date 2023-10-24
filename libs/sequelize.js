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
  'myEcommerce', //Nombre de la base
  'postgres', //Usuario
  '1234', // Password
  {
      host: 'localhost',
      dialect: 'postgres'
  }
);

setupModels(sequelize);
sequelize.sync();
// module.exports = conexion;
module.exports= sequelize;
