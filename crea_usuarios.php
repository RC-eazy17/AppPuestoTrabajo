<?php
$nombre=$_POST['nombre'];
$user=$_POST['user'];
$pass=$_POST['pass'];
$tipo_usuario=$_POST['tipo_usuario'];

session_start();

$conexion=mysqli_connect("localhost","root","","puestotrabajo");

$consulta="INSERT INTO usuarios (nombre, usuario, clave, tipo_usuario) 
VALUES ('".$nombre."', '".$user."', '".$pass."', '".$tipo_usuario."')";


mysqli_query($conexion,$consulta);

mysqli_close($conexion);

include("recibir_get.php");
?>

<script>swal("Listo!", "Usuario creado exitosamente", "success");</script>

<?php 
//header("location:index.html");

?>
