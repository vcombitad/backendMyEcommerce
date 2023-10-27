const {User, UserSchema} = require ('./user.model.js')
const {Products, ProductsSchema}= require('./myProducts.model.js')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
}

module.exports= setupModels;
