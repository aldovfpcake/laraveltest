var express = require('express');
var router  = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.post('/contacto',async(req,res)=> {
    console.log(req.body.mensaje);
    const mail ={
        to:'alvalen@gmail.com',
        subject:'Contacto Web',
        html:`${req.body.nombre} se contacto a través de
        la web y quieres más información a este correo:
        ${req.body.email} <br> Además hizo el siguiente 
        comentario : ${req.body.mensaje} <br> su te es :
        ${req.body.telefono}  `
     } 
     
     const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         auth:{
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
         } 
       });

    // var transport = nodemailer.createTransport({
    //    host: "smtp.mailtrap.io",
    //    port: 2525,
    //    auth: {
    //      user: "94995eb86c1a31",
    //      pass: "b18dce8e16d9ae"
    //    }
    //  });






       
       await transport.sendMail(mail)
       
       res.status(201).json({
         error:false,
         message:'Mensaje enviado'
       });
 
     
 })
 

router.get('/novedades',async function(req,res,next){
    let novedades = await novedadesModel.getNovedades();
    novedades = novedades.map(novedades =>{
        if (novedades.img_id ){
            const imagen = cloudinary.url(novedades.img_id,{
                width:100,
                height:100,
                crop:'fill'
            });
            return {
                novedades,
                imagen
            }
        } else {
            return {
                novedades,
                imagen: ' '
            }
        }

    } )
    
    res.json(novedades);
});
module.exports = router;