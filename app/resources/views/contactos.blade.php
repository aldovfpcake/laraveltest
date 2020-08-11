<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contactos</title>
</head>
<body> 
    <h1> Contactos </h1>
    
    <form method="POST" action="{{ route('MessagesController.store') }}">
         
         @csrf 
    
         <input name="name"  placeholder="Nombre....."><br>
         <input type="email" name="email" placeholder="Email....."><br>
         <textarea name="content" placeholder ="Mensaje....."></textarea><br>
         <button>Enviar </button>

    </form>





</body>