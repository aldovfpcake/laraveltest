<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculos de horas</title>
</head>
<body>
    <form action="/horas">
       
        {{ csrf_field() }}
        
        @csrf

        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        
        <P> hora de Entrada = <INPUT TYPE="TIME" NAME="hentra"> </P> <br>
        <input type ="submit" value="Enviar" >
        ...
    </form>
    @if(isset($arreglohora))
     print_r($arreglohora);
    @endif



</body>
</html>