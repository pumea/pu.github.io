// Get the car ID from the URL
const params = new URLSearchParams(window.location.search);
const carId = params.get("id");

// Car data
const cars = {
    1: { title: "Toyota Tundra 2023", price: "$48,000", mileage: "5,000 miles", image: "images/tundra1.jpg" },
    2: { title: "Toyota Tundra TRD Pro", price: "$55,000", mileage: "2,500 miles", image: "images/tundra2.jpg" },
    3: { title: "Toyota Tundra Limited", price: "$52,500", mileage: "3,200 miles", image: "images/tundra3.jpg" },
};

// Update the page content
if (cars[carId]) {
    document.getElementById("car-title").textContent = cars[carId].title;
    document.getElementById("car-price").textContent = cars[carId].price;
    document.getElementById("car-mileage").textContent = `Mileage: ${cars[carId].mileage}`;
    document.getElementById("car-image").src = cars[carId].image;
}
