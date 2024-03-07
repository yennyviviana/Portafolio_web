<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario y eliminar espacios en blanco extra
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    // Validar el nombre (no debe estar vacío)
    if (empty($name)) {
        $response = ["success" => false, "message" => "Por favor, ingresa tu nombre."];
        echo json_encode($response);
        exit();
    }

    // Validar el correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = ["success" => false, "message" => "Por favor, ingresa una dirección de correo electrónico válida."];
        echo json_encode($response);
        exit();
    }

    // Validar el mensaje (no debe estar vacío)
    if (empty($message)) {
        $response = ["success" => false, "message" => "Por favor, ingresa tu mensaje."];
        echo json_encode($response);
        exit();
    }

    // Aquí puedes continuar con el procesamiento del formulario, almacenamiento en la base de datos, etc.

    // Ejemplo de almacenamiento en la base de datos
    // $conn = new mysqli("tu_servidor", "tu_usuario", "tu_contraseña", "tu_base_de_datos");
    // ...

    // Envío de respuesta si todo está correcto
    $response = ["success" => true, "message" => "¡Formulario enviado y validado con éxito!"];
    echo json_encode($response);
} else {
    // Si se intenta acceder directamente a este archivo sin una solicitud POST, puedes manejarlo aquí
    $response = ["success" => false, "message" => "Acceso no permitido"];
    echo json_encode($response);
}
?>
