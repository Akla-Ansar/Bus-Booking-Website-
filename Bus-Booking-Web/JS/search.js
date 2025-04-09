const buses = [
  { id: 1, from: "Galle", to: "Jaffna", price: 900, time: "7:00 AM", seats: 30 },
  { id: 2, from: "Galle", to: "Jaffna", price: 900, time: "2:00 PM", seats: 25 },
  { id: 3, from: "Kandy", to: "Colombo", price: 600, time: "6:00 AM", seats: 40 },
  { id: 4, from: "Kandy", to: "Colombo", price: 600, time: "4:00 PM", seats: 35 },
  { id: 5, from: "Anuradhapura", to: "Polonnaruwa", price: 400, time: "7:30 AM", seats: 48 },
  { id: 6, from: "Anuradhapura", to: "Polonnaruwa", price: 400, time: "1:30 PM", seats: 45 },
  { id: 7, from: "Badulla", to: "Kilinochchi", price: 800, time: "8:00 AM", seats: 20 },
  { id: 8, from: "Badulla", to: "Kilinochchi", price: 800, time: "5:00 PM", seats: 15 },
  { id: 9, from: "Vavuniya", to: "Jaffna", price: 500, time: "10:00 AM", seats: 25 },
  { id: 10, from: "Vavuniya", to: "Jaffna", price: 500, time: "6:00 PM", seats: 18 },
  { id: 11, from: "Colombo", to: "Nuwara Eliya", price: 1200, time: "9:00 AM", seats: 12 },
  { id: 12, from: "Colombo", to: "Nuwara Eliya", price: 1200, time: "3:00 PM", seats: 28 },
];

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const locations = [...new Set(buses.flatMap((bus) => [bus.from, bus.to]))];
const resultsDiv = document.getElementById("bus-results");

// Populate dropdown options for "From" and "To"
locations.forEach((location) => {
  const fromOption = new Option(location, location);
  const toOption = new Option(location, location);
  fromSelect.add(fromOption);
  toSelect.add(toOption);
});

// Enable or disable return date based on trip type
document.querySelectorAll('input[name="trip"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const returnDate = document.getElementById("return");
    returnDate.disabled = e.target.value === "one-way";
    if (returnDate.disabled) returnDate.value = ""; // Clear return date if disabled
  });
});

// Search for buses on button click
document.getElementById("bus-search-btn").addEventListener("click", () => {

  const from = fromSelect.value;
  const to = toSelect.value;
  const departure = document.getElementById("departure").value;
  const returnDate = document.getElementById("return").value;
  const guests = parseInt(document.getElementById("guests").value);

  if (!from || !to || !departure || guests <= 0 || guests > 50) {
    alert("Please fill in all required fields correctly.");
    return;
  }

  if (from === to) {
    alert("Departure and destination locations must be different.");
    return;
  }

  const filteredBuses = buses.filter(
    (bus) => bus.from === from && bus.to === to && bus.seats >= guests
  );

  displayBuses(filteredBuses, guests);
});

// Display filtered bus results
function displayBuses(filteredBuses, guests) {
  resultsDiv.innerHTML = ""; // Clear previous results

  if (filteredBuses.length === 0) {
    resultsDiv.innerHTML =
      "<p class='text-center'>No buses available for the selected route and number of guests.</p>";
    return;
  }

  filteredBuses.forEach((bus) => {
    const card = document.createElement("div");
    card.className = "bus-card";

    card.innerHTML = `
      <div>
        <h3>${bus.from} → ${bus.to}</h3>
        <p>Time: ${bus.time}</p>
        <p>Price per Person: Rs. ${bus.price}</p>
        <p>Total Price: Rs. ${bus.price * guests}</p>
        <p>Seats Available: ${bus.seats}</p>
      </div>
      <button class="select-btn" data-id="${bus.id}">Select</button>
    `;

    resultsDiv.appendChild(card);
  });
}

// Handle bus selection for next step
resultsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("select-btn")) {
    const busId = e.target.dataset.id;
    const guests = parseInt(document.getElementById("guests").value);
    const selectedBus = buses.find((bus) => bus.id == busId);

    if (!selectedBus) {
      alert("Selected bus not found.");
      return;
    }

    // Save selected bus and guest details to localStorage
    localStorage.setItem("selectedBus", JSON.stringify(selectedBus));
    localStorage.setItem("guests", guests);

    // Redirect to passenger details page
    window.location.href = "passenger-details.html";
  }
});
