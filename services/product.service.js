const {faker} = require('@faker-js/faker');
const boom=require('@hapi/boom');
const sequelize= require('../libs/sequelize')
const {models}= require('../libs/sequelize')

class ProductsService{
  constructor () {
    this.products=[];
    this.generate();
  }

  async generate() {
    const limit= 100;
  for (let index = 0; index < limit; index++) {
   this.products.push ({
     id: faker.string.uuid(),
     name: faker.commerce.productName(),
     price:parseInt(faker.commerce.price(),10),
    image:faker.image.avatar(),
    isBlock: faker.datatype.boolean(),
   })
  }
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
    const products= await models.Products.findByPk(id);
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
    const products= await this.findOne(id);
   await products.destroy();
    return {id};
  }
}


module.exports= ProductsService;
