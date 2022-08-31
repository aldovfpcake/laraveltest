

router.post('/contacto',async(req,res)=> {
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
      
      await transport.sendMail(mail)
      
      res.status(201).json({
        error:false,
        message:'Mensaje enviado'
      });

    
})
