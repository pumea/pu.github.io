// Get the service name from the URL
const params = new URLSearchParams(window.location.search);
const service = params.get("service");

// Service data
const serviceData = {
    financing: {
        title: "Car Financing",
        image: "images/financing.jpg",
        description: "We offer flexible financing options with low-interest rates to help you own your dream Toyota Tundra.",
        benefits: ["Low-interest rates", "Fast approval process", "Flexible repayment options"]
    },
    insurance: {
        title: "Car Insurance",
        image: "images/insurance.jpg",
        description: "Protect your investment with the best insurance coverage, ensuring peace of mind on the road.",
        benefits: ["Comprehensive coverage", "Affordable premiums", "Quick claim processing"]
    },
    trade-in: {
        title: "Trade-In Program",
        image: "images/trade-in.jpg",
        description: "Upgrade to a new Toyota Tundra by trading in your old vehicle and getting the best value.",
        benefits: ["Top trade-in value", "Hassle-free process", "Upgrade to the latest models"]
    }
};

// Update the page content
if (serviceData[service]) {
    document.getElementById("service-title").textContent = serviceData[service].title;
    document.getElementById("service-image").src = serviceData[service].image;
    document.getElementById("service-description").textContent = serviceData[service].description;

    // Update benefits list
    const benefitsList = document.getElementById("service-benefits");
    benefitsList.innerHTML = "";
    serviceData[service].benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });
}
