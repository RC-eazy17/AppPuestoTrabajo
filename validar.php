<?php
error_reporting(0);

$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;

$conexion=mysqli_connect("localhost","root","","puestotrabajo");

$consulta="SELECT * FROM usuarios where usuario='".$usuario."' and clave = '".$contraseña."'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_fetch_array($resultado);


if($filas['tipo_usuario']=="admin"){ //administrador
    header("location:CRUD/index.html");

}else if($filas['tipo_usuario']=="poster"){ //poster
    header("location:CRUD/index.html");

    }else if($filas['tipo_usuario']=="user"){ //user
    header("location:CRUD/principal.html");
}
else{

    include("index.html");
    ?>
    <script>swal("Error!", "Usuario y contraseña incorrectos o no encontrados", "error");</script>
    <?php  
}



mysqli_free_result($resultado);
mysqli_close($conexion);
