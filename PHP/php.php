<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($email === "admin@example.com" && $password === "1234") {
        echo "Login successful!";
    } else {
        echo "Invalid credentials!";
    }
}
?>
