document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const carId = params.get("id");

    // Car Data
    const cars = {
        1: { title: "Toyota Tundra 2023", price: "$48,000", mileage: "5,000 miles", image: "images/tundra1.jpg" },
        2: { title: "Toyota Tundra TRD Pro", price: "$55,000", mileage: "2,500 miles", image: "images/tundra2.jpg" },
        3: { title: "Toyota Tundra Limited", price: "$52,500", mileage: "3,200 miles", image: "images/tundra3.jpg" },
        4: { title: "Toyota Tundra Platinum", price: "$60,000", mileage: "1,500 miles", image: "images/tundra4.jpg" },
    };

    // Update Page Content
    if (cars[carId]) {
        document.getElementById("car-title").textContent = cars[carId].title;
        document.getElementById("car-price").textContent = cars[carId].price;
        document.getElementById("car-mileage").textContent = cars[carId].mileage;
        document.getElementById("car-image").src = cars[carId].image;

        // Update Hidden Fields for Form Submission
        document.getElementById("car-name").value = cars[carId].title;
        document.getElementById("car-price-value").value = cars[carId].price.replace("$", "").replace(",", "");
    }
});
