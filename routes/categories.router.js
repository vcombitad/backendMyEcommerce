const express= require('express');
const router=express.Router();

const CategoriesService=require('../services/categorie.service');
const service= new CategoriesService();

router.get('/',(req, res)=>{
  const categories= service.find();
   res.json(categories);
 });

 //los endpoints especificos van antes que los dinamicos para evitar errores
//  router.get('/filter', (req,res)=>{
//   const categoriesFilter=service.findOne();
//   res.json(categoriesFilter)
//  })


 //:id es un endpoint dinamico, es decir colocando solo el numero del id nos da resultado sin necesidad de ?
//  router.get('/:id',(req, res)=>{
//    const {id} = req.params;
//    const categorie= service.findOne(id);
//    res.json(categorie);

//  });

//  router.post('/', (req, res)=>{
//     const body= req.body
//     res.status(201).json({
//       message: 'created',
//       data: body

//     });
//  })

//  router.patch('/:id', (req, res)=>{
//   const {id} = req.params;
//   const body= req.body
//   res.json({
//     message: 'update!',
//     data: body,
//     id,

//   });
// })

// router.delete('/:id', (req, res)=>{
//   const {id} = req.params;
//   const body= req.body
//   res.json({
//     message: 'deleted!',
//     id,

//   });
// })

 module.exports= router;

