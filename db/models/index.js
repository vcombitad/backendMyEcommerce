
const {Products, ProductsSchema}= require('./myProducts.model.js')

function setupModels(sequelize) {

  Products.init(ProductsSchema, Products.config(sequelize));
}

module.exports= setupModels;
