document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search");

    searchButton.addEventListener("click", function () {
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;
        const passengers = document.getElementById("passengers").value;

        if (!from || !to || !date || !passengers) {
            alert("Please fill out all fields before proceeding.");
        } else {
            window.location.href = "search.html";
        }
    });
});
