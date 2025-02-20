<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $car_name = $_POST["car_name"];
    $car_price = $_POST["car_price"];
    $full_name = $_POST["full_name"];
    $email = $_POST["email"];
    $address = $_POST["address"];
    $payment_method = $_POST["payment_method"];

    // Simulate saving to a database (replace with actual DB logic)
    $message = "Order for $car_name ($$car_price) placed by $full_name.\nEmail: $email\nAddress: $address\nPayment Method: $payment_method";
    
    // Send confirmation message (simulate)
    echo "<script>alert('Order placed successfully!'); window.location.href='../listings.html';</script>";
}
?>
