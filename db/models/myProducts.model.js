const {Model, DataTypes, Sequelize} = require ('sequelize');
const sequelize = require('../../libs/sequelize');

const PRODUCTS_TABLE='products';
const ProductsSchema={
  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER
  },

    name:{
    allowNull:false,
    type: DataTypes.STRING,

    },

    price:{
      allowNull:false,
      type: DataTypes.INTEGER,

      },

    description:{
    allowNull:true,
    type: DataTypes.STRING,

    },
    createAt:{
    allowNull:false,
    type: DataTypes.DATE,
    fiel:'create_at',
    defaultValue:Sequelize.NOW,
    },

}

class Products extends Model {
  static associate() {
    //associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName:PRODUCTS_TABLE,
      modelName:'Products',
      timestamps: false
    }
  }
}

module.exports = {PRODUCTS_TABLE, ProductsSchema, Products}
