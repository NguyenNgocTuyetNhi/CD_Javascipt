function addCourse() {
    var courseNameInput = document.getElementById("courseName");
    var courseName = courseNameInput.value.trim();

    // Kiểm tra nếu không để trống tên môn học
    if (courseName === "") {
        alert("Vui lòng nhập tên môn học.");
        return;
    }

    // Tạo một phần tử li mới chứa tên môn học
    var listItem = document.createElement("li");
    listItem.textContent = courseName;

    // Tạo nút xóa
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        listItem.remove();
    };

    // Thêm nút xóa vào phần tử li
    listItem.appendChild(deleteButton);

    // Thêm phần tử li vào danh sách môn học
    document.getElementById("courseList").appendChild(listItem);

    // Xóa nội dung khung nhập sau khi thêm môn học thành công
    courseNameInput.value = "";
}
