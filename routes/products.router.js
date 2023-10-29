const express = require('express');

const ProductsService=require('../services/product.service')
const validatorHandler=require('../middlewares/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema}=require('../schemas/product.schema');
const router=express.Router();
const service= new ProductsService(); //instancia de productServie

router.get('/',async (req, res)=>{
  const products=await service.find();
   res.json(products);
 });

 //los endpoints especificos van antes que los dinamicos para evitar errores
 router.get('/filter',(req, res)=>{
   res.send('yo soy un filter');
 });

 //:id es un endpoint dinamico, es decir colocando solo el numero del id nos da resultado sin necesidad de ?

 router.post('/',
 validatorHandler(createProductSchema, 'body'),
 async (req, res)=>{
    const body= req.body
    const newProduct=await service.create(body);
    res.status(201).json(newProduct);
 })

 router.patch('/:id',async (req, res)=>{
  const { id } = req.params;
      const body = req.body;
      const product = await service.update({where:{id:id}}, body);
      res.json(product);

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const rta=await service.delete(id);
  res.json(rta);
})
 })

 module.exports= router;

 router.get('/:id', async (req, res)=>{
  const {id} = req.params;
  const rta=await service.findOne({
    where:{
      id:id
    }
  });
  res.json(rta)
 })
