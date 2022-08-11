var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login'),{
  layout:'admin/layout'
  }
});

router.post('/',async(req,res,next)=>{
  try {
       var usuario  = req.body.nombre;
       var password = req.body.password;
       console.log(usuario);
       var data = await usuariosModel.getUserByUsernameAndPassword(usuario,password);
       if (data != undefined){
          req.session.id_usuario = data.id;
          req.session.nombre     = data.nombre;
          console.log("SE logueo");
          res.redirect('/admin/novedades');
       }else {
        res.render('admin/login',{
          layout : 'admin/layout',
          error : true
        });
       }
  }catch (error){
    console.log(error);
  }
})

router.get('/logout',function(req,res,next){
  req.session.destroy();
  res.redirect('/admin/login');
  //res.render('admin/login',{
   // layout:'admin/layout'
   //  });
  
});

module.exports = router;
