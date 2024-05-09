document.getElementById("convertButton").addEventListener("click", function() {
    convertToURLFriendly();
});

function convertToURLFriendly() {
    var inputString = document.getElementById("inputString").value;
    var urlFriendlyString = inputString.trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
                                        .replace(/<\/?[^>]+(>|$)/g, "") // Loại bỏ thẻ HTML
                                        .replace(/[^\w\s]/gi, "") // Loại bỏ các ký tự đặc biệt
                                        .replace(/\s+/g, "-"); // Thay thế khoảng trắng bằng dấu gạch ngang

    document.getElementById("outputURL").textContent = "Chuỗi URL friendly: " + urlFriendlyString;
}
