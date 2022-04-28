function onc() {
    var studentname = document.getElementById("name").value;
    var studentid = document.getElementById("id").value;
    var level = document.getElementById("level3").value;

    if (studentid > 8 || studentid < 8) {
        alert("invalid id");
        return false;

    }

    if (studentname == "") {
        alert("invalid name!");
        return false;
    }
    if (level != 3) {
        alert("level should be 3!")
        return false;

    }
}