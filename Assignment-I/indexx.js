function sortNumbers(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let numbers = [a, b, c];

    numbers.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    displayNumbers(numbers);
}

function sortAscending() {
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let numbers = [a, b, c];

    numbers.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    displayNumbers(numbers);
}

function sortDescending() {
    let a = parseFloat(document.getElementById("A").value);
    let b = parseFloat(document.getElementById("B").value);
    let c = parseFloat(document.getElementById("C").value);
    let numbers = [a, b, c];

    numbers.sort(function (a, b) {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    });

    displayNumbers(numbers);
}

function displayNumbers(numbers) {
    let sortedNumbersDiv = document.getElementById("sortedNumbers");
    sortedNumbersDiv.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
        let numberDiv = document.createElement("div");
        numberDiv.classList.add("number-box");
        numberDiv.textContent = numbers[i];
        sortedNumbersDiv.appendChild(numberDiv);
    }
}

document.getElementById("sortForm").addEventListener("submit", sortNumbers);