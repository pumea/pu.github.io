<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($email === "admin@example.com" && $password === "1234") {
        echo "<script>alert('Login successful!'); window.location.href='../index.html';</script>";
    } else {
        echo "<script>alert('Invalid email or password!'); window.location.href='../login.html';</script>";
    }
}
?>
