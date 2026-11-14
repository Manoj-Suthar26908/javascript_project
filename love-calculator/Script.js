
let yourName = document.getElementById("yourName");
let partnerName = document.getElementById("partnerName");

let calculateBtn = document.getElementById("calculateBtn");
let resetBtn = document.getElementById("resetBtn");

let percentage = document.getElementById("percentage");
let message = document.getElementById("message");

// Calculate Love
calculateBtn.addEventListener("click", () => {

    let name1 = yourName.value.trim();
    let name2 = partnerName.value.trim();

    // Input validation
    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    // Generate random percentage
    let loveScore = Math.floor(Math.random() * 101);

    percentage.textContent = loveScore + "%";

    // Display result
    if (loveScore <= 20) {
        message.textContent = "Just Friends 😄";
    }
    else if (loveScore <= 40) {
        message.textContent = "Good Friendship 🤝";
    }
    else if (loveScore <= 60) {
        message.textContent = "Something Special ✨";
    }
    else if (loveScore <= 80) {
        message.textContent = "Great Connection ❤️";
    }
    else {
        message.textContent = "Perfect Match 💕";
    }

});

// Reset functionality
resetBtn.addEventListener("click", () => {

    yourName.value = "";
    partnerName.value = "";

    percentage.textContent = "";
    message.textContent = "";

});
