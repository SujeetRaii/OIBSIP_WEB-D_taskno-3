 const form = document.querySelector("form");
    const input = document.querySelector("input");
    const fromUnit = document.getElementById("from-unit");
    const toUnit = document.getElementById("to-unit");
    const msg = document.querySelector(".msg");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const value = parseFloat(input.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(value)) {
            msg.innerText = "Please enter a valid number!";
            return;
        }

        let result;

       
        if (from === "celsius") {
            if (to === "celsius") result = value;
            else if (to === "fahrenheit") result = (value * 9/5) + 32;
            else if (to === "kelvin") result = value + 273.15;
        }
        else if
         (from === "fahrenheit") {
            if (to === "celsius") result = (value - 32) * 5/9;
            else if (to === "fahrenheit") result = value;
            else if (to === "kelvin") result = (value - 32) * 5/9 + 273.15;
        }

        
        else if (from === "kelvin") {
            if (to === "celsius") result = value - 273.15;
            else if (to === "fahrenheit") result = (value - 273.15) * 9/5 + 32;
            else if (to === "kelvin") result = value;
        }

        msg.innerText = `${value} ${from.charAt(0).toUpperCase() + from.slice(1)} = ${result.toFixed(2)} ${to.charAt(0).toUpperCase() + to.slice(1)}`;
    });

