<?php
    /*---------- Datos del formulario ----------*/
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    /*---------- Envio a base de datos ----------*/
    $conectar = mysqli_connect('localhost','root','','cyjinversiones') or die ('No se conecto!!'.mysql_error());
    date_default_timezone_set("America/Lima");
    $fecha = date("Y-m-d H:i:s");
    $sql = "insert into contacto(nombre, telefono, correo, mensaje, fecha) values ('$nombre','$telefono','$email','$mensaje','$fecha')";

    /*---------- Envio al correo ----------*/
    $correo1="info@cyjinversiones.com";
    $correo2="ventas@cyjinversiones.com";
    $contenido="Nombre: ".$nombre."\nTelefono: ".$telefono."\nCorreo: ".$email."\nMensaje: ".$mensaje;
    //mail($correo1,"Contacto", $contenido);
    //mail($correo2,"Contacto", $contenido);

    /*---------- Validacion en PHP ----------*/
    //if(!is_numeric($telefono)){
        //echo '<script type="text/javascript"> alert("Completa todos los campos"); </script>';
    //}
    
    /*---------- Validacion de envio ----------*/
    if($nombre && $email && $telefono && $mensaje && $fecha){
        mysqli_query($conectar,$sql);
    }
    header('location: http://localhost:8080/cyj_5_pro/contacto.php');
?>