var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);

router.get('/', async function(req, res, next) {
  console.log(req.session.nombre);
  var novedades = await novedadesModel.getNovedades(); 
  
  res.render('admin/novedades',{
     layout : 'admin/layout',
     usuario : req.session.nombre,
     novedades 
       });
   
  });

  router.get('/agregar',(req,res,next)=>{
    res.render('admin/agregar',{
      layout: 'admin/layout'
    });
  })

  router.get('/eliminar/:id',async(req,res,next)=>{
    var id = req.params.id;
    await novedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/novedades'); 

    res.send( "Elininando registro"); 
  })

  router.get('/modificar/:id',async(req,res,next)=>
  { let id = req.params.id;
    let novedad = await novedadesModel.getNovedadesById(id);
    res.render('admin/modificar',{
      layout: 'admin/layout',
      novedad
    });
  })

  router.post('/veras',(req,res,next)=>{
    console.log("SERA");
   // res.redirect('/admin/novedades');
  }) 
 
  router.post('/modificar',async(req,res,next) =>{

    try {
     let  obj ={
       titulo : req.body.titulo,
       subtitulo : req.body.subtitulo,
       cuerpo : req.body.cuerpo
     }
     await novedadesModel.modificarNovedadById(obj,req.body.id) ;
     res.redirect('/admin/novedades');  
    
   } catch (error) {
        console.log(error)
        res.render('admin/modificar',{
        layout:'admin/layout',
        error: true, message : 'no se modifico la novedad'  
      })
   }        
  })


  router.post('/agregar',async(req, res,next)=>{
   try{
      if(req.body.titulo !=""&& req.body.subtitulo != "" &&
          req.body.cuerpo != ""){
          await novedadesModel.insertNovedad({
           ...req.body,
            img_id});
          res.redirect('/admin/novedades')  
          }else {
           res.render('admin/agregar',{
            layout :'admin/layout',
            error:true,message :'todos los campos son requeridoss'
           })       
          }

    }catch(error){
      console.log(error)
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error: true, message: 'No se cargo la novedad'
      })
    }
  })

  module.exports = router;
