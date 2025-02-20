document.addEventListener("DOMContentLoaded", function () {
    // Get the car ID from the URL
    const params = new URLSearchParams(window.location.search);
    const carId = params.get("id");

    // Car data
    const cars = {
        1: { title: "Toyota Tundra 2023", price: "$48,000", mileage: "5,000 miles", image: "images/tundra1.jpg", description: "This is the latest 2023 Toyota Tundra with advanced features and low mileage." },
        2: { title: "Toyota Tundra TRD Pro", price: "$55,000", mileage: "2,500 miles", image: "images/tundra2.jpg", description: "The TRD Pro model offers rugged performance with top-tier off-road capabilities." },
        3: { title: "Toyota Tundra Limited", price: "$52,500", mileage: "3,200 miles", image: "images/tundra3.jpg", description: "A luxury pickup truck with a spacious interior and advanced safety features." },
        4: { title: "Toyota Tundra Platinum", price: "$60,000", mileage: "1,500 miles", image: "images/tundra4.jpg", description: "The Platinum edition comes with premium leather seats and a high-end audio system." },
    };

    // Update the page content if the car exists
    if (cars[carId]) {
        document.getElementById("car-title").textContent = cars[carId].title;
        document.getElementById("car-price").textContent = cars[carId].price;
        document.getElementById("car-mileage").textContent = `Mileage: ${cars[carId].mileage}`;
        document.getElementById("car-image").src = cars[carId].image;
        document.getElementById("car-description").textContent = cars[carId].description;
    } else {
        document.querySelector(".container").innerHTML = "<h2 class='text-center'>Car not found!</h2>";
    }
});
