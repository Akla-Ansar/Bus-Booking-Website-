// Get bus and guest details from localStorage
const bus = JSON.parse(localStorage.getItem("selectedBus"));
const guests = parseInt(localStorage.getItem("guests"));

const passengerFields = document.getElementById("passengerFields");

// Generate passenger input fields
for (let i = 1; i <= guests; i++) {
    const passengerDiv = document.createElement("div");
    passengerDiv.className = "passenger";
    passengerDiv.innerHTML = `
        <h3>Passenger ${i}</h3>
        <label for="title${i}">Title:</label>
        <select id="title${i}" required>
            <option value="Mr">Mr.</option>
            <option value="Ms">Ms.</option>
            <option value="Miss">Miss</option>
        </select>
        <label for="firstName${i}">First Name:</label>
        <input type="text" id="firstName${i}" required>
        <label for="lastName${i}">Last Name:</label>
        <input type="text" id="lastName${i}" required>
        <label for="gender${i}">Gender:</label>
        <select id="gender${i}" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <label for="email${i}">Email:</label>
        <input type="email" id="email${i}" required>
    `;
    passengerFields.appendChild(passengerDiv);
}

// Handle form submission
document.getElementById("passengerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const passengerData = [];
    for (let i = 1; i <= guests; i++) {
        passengerData.push({
            title: document.getElementById(`title${i}`).value,
            firstName: document.getElementById(`firstName${i}`).value,
            lastName: document.getElementById(`lastName${i}`).value,
            gender: document.getElementById(`gender${i}`).value,
            email: document.getElementById(`email${i}`).value,
        });
    }

    // Save passenger details to localStorage
    localStorage.setItem("passengerDetails", JSON.stringify(passengerData));

    // Redirect to a confirmation page or process further
    alert("Passenger details saved successfully!");
    // window.location.href = "confirmation.html"; // Add confirmation page if needed
});
document.getElementById("passengerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const passengers = [];
    for (let i = 1; i <= guests; i++) {
        passengers.push({
            title: document.getElementById(`title${i}`).value,
            firstName: document.getElementById(`firstName${i}`).value,
            lastName: document.getElementById(`lastName${i}`).value,
            gender: document.getElementById(`gender${i}`).value,
            email: document.getElementById(`email${i}`).value,
        });
    }

    // Save data for the summary page
    const ticketData = {
        bus: bus,
        passengers: passengers,
        date: new Date().toLocaleDateString(), // Current date as departure date
        returnDate: new Date().toLocaleDateString(), // Mock return date
        totalPrice: bus.price * guests,
    };

    localStorage.setItem("ticketData", JSON.stringify(ticketData));

    // Redirect to the summary page
    window.location.href = "ticket-summary.html";
});
