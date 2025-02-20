document.addEventListener("DOMContentLoaded", function () {
    const carList = document.getElementById("car-list");

    // Sample Car Data
    const cars = [
        { id: 1, name: "Toyota Tundra 2023", price: 48000, year: 2023, image: "images/tundra1.jpg" },
        { id: 2, name: "Toyota Tundra TRD Pro", price: 55000, year: 2022, image: "images/tundra2.jpg" },
        { id: 3, name: "Toyota Tundra Limited", price: 52000, year: 2021, image: "images/tundra3.jpg" },
        { id: 4, name: "Toyota Tundra Platinum", price: 60000, year: 2023, image: "images/tundra4.jpg" },
    ];

    function displayCars(filteredCars) {
        carList.innerHTML = "";
        filteredCars.forEach(car => {
            carList.innerHTML += `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${car.image}" class="card-img-top" alt="${car.name}">
                        <div class="card-body">
                            <h5 class="card-title">${car.name}</h5>
                            <p class="card-text">Price: $${car.price.toLocaleString()}</p>
                            <p class="card-text">Year: ${car.year}</p>
                            <a href="car-details.html?id=${car.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    function filterCars() {
        let priceFilter = document.getElementById("priceFilter").value;
        let yearFilter = document.getElementById("yearFilter").value;
        let sortOrder = document.getElementById("sortOrder").value;

        let filteredCars = cars.filter(car => {
            return (priceFilter === "all" || car.price <= parseInt(priceFilter)) &&
                   (yearFilter === "all" || car.year >= parseInt(yearFilter));
        });

        if (sortOrder === "low-high") {
            filteredCars.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high-low") {
            filteredCars.sort((a, b) => b.price - a.price);
        } else {
            filteredCars.sort((a, b) => b.year - a.year);
        }

        displayCars(filteredCars);
    }

    document.getElementById("priceFilter").addEventListener("change", filterCars);
    document.getElementById("yearFilter").addEventListener("change", filterCars);
    document.getElementById("sortOrder").addEventListener("change", filterCars);

    displayCars(cars);
});
