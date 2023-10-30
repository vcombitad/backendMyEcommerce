
const boom=require('@hapi/boom');
const {models}= require('../libs/sequelize')

class ProductsService{
  constructor () {
    this.products=[];

  }


  async create(data){
    const newProduct= await models.Products.create(data); // el products sale de models: modelsName

    return newProduct
  }

  async find () {
    const rta= await models.Products.findAll()
    return rta;
  }

  async findOne(id) {
    const products= await models.Products.findOne(id);
    if (!products) {
      throw boom.notFound('products not found')
    }
    return products;
  }

  async update(id, changes) {
    const product= await models.Products.findOne(id);
    const rta= await product.update(changes);
    return rta;
  }

  async delete(id){
    const products= await models.Products.findOne(id);
   await products.destroy();
    return {id};
  }
}


module.exports= ProductsService;
