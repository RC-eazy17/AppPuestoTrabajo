<!DOCTYPE html>
<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Registro</title>
	<link rel="stylesheet" href="css/boton.css">
	<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/getAndPost.css">
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
	<div id="formularios">
		<form action="crea_usuarios.php" method="post">
		    <p>Nombre:</p>
			<div class="field-container">
				<i class="fa fa-user-circle-o" aria-hidden="true"></i>	
				<input name="nombre" type="text" class="field" placeholder="Nombre" required><br/>
			</div>
			<p>Usuario:</p>
			<div class="field-container">
				<i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>	
				<input name="user" type="text" class="field" placeholder="Usuario" required> <br/>
			</div>
			<p>Contraseña:</p>
			<div class="field-container">
				<i class="fa fa-key fa-lg" aria-hidden="true"></i>	
				<input name="pass" type="password" class="field" placeholder="Contraseña" required> <br/>
			</div>
			<p>
				<p>Tipo de Usuario:</p>
				<select name="tipo_usuario" id="" class="field" required>
					<option value="" >Selecciona un tipo de usuario</option>
					<option value="poster">Poster</option>
					<option value="user">User</option>
				</select>

			</p>
			<p class="center-content">
				<input type="submit" class="btn btn-green" value="Registrar usuario"> <br/><br/>
				<a href="index.html">Iniciar sesion</a>
			</p>
		</form>		
	</div>
</body>

</html>
