function checkStudentID() {
    var studentID = prompt("Nhập mã sinh viên của bạn:");
  
    if (studentID === "2122110601") {
      alert("Mã sinh viên chính xác!"); 
    } else {
      var confirmResult = confirm("Mã sinh viên không đúng. Bạn có muốn thử lại không?");
      if (confirmResult) {
        checkStudentID(); 
      } else {
        alert("Cảm ơn bạn!");
      }
    }
  }
  checkStudentID();