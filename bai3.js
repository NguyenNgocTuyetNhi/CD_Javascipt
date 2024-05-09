// Function to generate a random choice
function getRandomChoice() {
    const choices = ["Oẳn", "Tù tì"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to compare user's choice with computer's choice
function compareChoices(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Hòa";
    } else if (
        (userChoice === "Oẳn" && computerChoice === "Tù tì") ||
        (userChoice === "Tù tì" && computerChoice === "Oẳn")
    ) {
        return "Thắng";
    } else {
        return "Thua";
    }
}

// Function to start the game when the button is clicked
document.getElementById("rockButton").addEventListener("click", function() {
    const userChoice = "Oẳn";
    const computerChoice = getRandomChoice();
    const result = compareChoices(userChoice, computerChoice);
    document.getElementById("result").textContent = `Kết quả: Bạn ${result}! (Bạn chọn ${userChoice}, máy tính chọn ${computerChoice})`;
});

document.getElementById("paperButton").addEventListener("click", function() {
    const userChoice = "Tù tì";
    const computerChoice = getRandomChoice();
    const result = compareChoices(userChoice, computerChoice);
    document.getElementById("result").textContent = `Kết quả: Bạn ${result}! (Bạn chọn ${userChoice}, máy tính chọn ${computerChoice})`;
});
