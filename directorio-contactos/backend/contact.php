<?php
// Mostrar errores para depuración
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Cabeceras CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Datos de conexión a la base de datos
$host = "localhost";
$username = "root";
$password = "";
$database = "contactos";

// Crear conexión
$conn = new mysqli($host, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode([
        "success" => false,
        "error" => "Error de conexión: " . $conn->connect_error
    ]));
}

// Manejar solicitud OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Obtener todos los contactos
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $result = $conn->query("SELECT * FROM contactos");

    if (!$result) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "error" => "Error en consulta SQL: " . $conn->error
        ]);
        exit();
    }

    $contacts = [];
    while ($row = $result->fetch_assoc()) {
        $contacts[] = $row;
    }

    echo json_encode([
        "success" => true,
        "contacts" => $contacts
    ]);
}

// Cerrar conexión
$conn->close();
?>
