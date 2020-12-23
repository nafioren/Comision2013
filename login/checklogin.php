<?php
    echo "{$_POST['inputEmail']} <br>";
    echo "{$_POST['inputPassword']} <br>";
    require_once("./clases/conexionDB.php");
    $conexionBD = new ConexionDB("localhost","root","","cacproyecto");
    $conexionBD ->conectar();
    $sql = "SELECT * FROM `usuarios` WHERE usuario = '{$_POST['inputEmail']}' and '{$_POST['inputPassword']}'";
    echo "$sql <br>";
    $result = $conexionBD->ejecutar($sql);
    if($conexionBD->cantFilas()>0){
        echo "Ingreso correctamente <br>";
    } else {
        echo "Usuario o password incorrectos <br>";
    }
?>