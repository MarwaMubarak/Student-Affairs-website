function myform() {
    let studentName = document.forms["form"]["studentName"];
    let studentID = document.forms["form"]["studentID"];
    let level = document.forms["form"]["level"];

    if (studentName = "") {
        alert("Add student name!")
        return false;
    }
    else {
        return true;

    }
    if (studentID < 8 || studentID > 8) {
        alert("Invalid ID!")
        return false;
    }

}