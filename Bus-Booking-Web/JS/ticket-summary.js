// Fetch ticket details from localStorage
const ticketData = JSON.parse(localStorage.getItem("ticketData"));

const summaryDetails = document.getElementById("summaryDetails");
summaryDetails.innerHTML = `
    <div>
        <h3>${ticketData.bus.from} → ${ticketData.bus.to}</h3>
        <p><strong>Date:</strong> ${ticketData.date}</p>
        <p><strong>Return Date:</strong> ${ticketData.returnDate}</p>
        <p><strong>Time:</strong> ${ticketData.bus.time}</p>
        <p><strong>No. of Passengers:</strong> ${ticketData.passengers.length}</p>
        <p><strong>Seats Available:</strong> ${ticketData.bus.seats}</p>
        <p><strong>Price:</strong> Rs. ${ticketData.totalPrice}</p>
    </div>
`;

// Handle payment method selection
document.getElementById("offlinePayment").addEventListener("click", () => {
    alert(`Invoice: Pending Payment
Please take this invoice to the nearest payment center.

Details:
Bus: ${ticketData.bus.from} → ${ticketData.bus.to}
Date: ${ticketData.date}
Total Price: Rs. ${ticketData.totalPrice}
Passengers: ${ticketData.passengers.length}

Take a screenshot for future reference!`);
});

document.getElementById("onlinePayment").addEventListener("click", () => {
    alert(`Payment Confirmed!
Your ticket has been booked successfully.

Details:
Bus: ${ticketData.bus.from} → ${ticketData.bus.to}
Date: ${ticketData.date}
Total Price: Rs. ${ticketData.totalPrice}
Passengers: ${ticketData.passengers.length}

Take a screenshot of this confirmation for future reference.`);
});
