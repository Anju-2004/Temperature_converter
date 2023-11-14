function convertCelsiusToFahrenheit() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    if (celsiusInput === "") {
        alert("Please enter a temperature in Celsius.");
        return;
    }
    let fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsiusInput} Celsius is equal to ${fahrenheitResult.toFixed(2)} Fahrenheit`;
}

function convertFahrenheitToCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheitInput").value;
    if (fahrenheitInput === "") {
        alert("Please enter a temperature in Fahrenheit.");
        return;
    }
    let celsiusResult = (fahrenheitInput - 32) * 5/9;
    document.getElementById("result").innerHTML = `${fahrenheitInput} Fahrenheit is equal to ${celsiusResult.toFixed(2)} Celsius`;
}

function clearInput() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("result").innerHTML = "";
}
