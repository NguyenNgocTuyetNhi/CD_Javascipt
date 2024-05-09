function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let result;

    if (isNaN(inputValue)) {
        document.getElementById("result").textContent = "Vui lòng nhập giá trị hợp lệ.";
        return;
    }

    switch (inputUnit) {
        case "meter":
            result = convertFromMeter(inputValue, outputUnit);
            break;
        case "feet":
            result = convertFromFeet(inputValue, outputUnit);
            break;
        case "inch":
            result = convertFromInch(inputValue, outputUnit);
            break;
        default:
            document.getElementById("result").textContent = "Đơn vị không hợp lệ.";
            return;
    }

    document.getElementById("result").textContent = `Kết quả: ${result} ${outputUnit}`;
}

function convertFromMeter(value, outputUnit) {
    switch (outputUnit) {
        case "meter":
            return value;
        case "feet":
            return value * 3.28084;
        case "inch":
            return value * 39.3701;
        default:
            return "Đơn vị không hợp lệ.";
    }
}

function convertFromFeet(value, outputUnit) {
    switch (outputUnit) {
        case "meter":
            return value * 0.3048;
        case "feet":
            return value;
        case "inch":
            return value * 12;
        default:
            return "Đơn vị không hợp lệ.";
    }
}

function convertFromInch(value, outputUnit) {
    switch (outputUnit) {
        case "meter":
            return value * 0.0254;
        case "feet":
            return value * 0.0833333;
        case "inch":
            return value;
        default:
            return "Đơn vị không hợp lệ.";
    }
}
