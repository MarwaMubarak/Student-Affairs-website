function onc() {
    var studentname = document.getElementById("Name").value;
    var studentid = document.getElementById("Id").value;
    var len = studentid.toString().length;

    if (studentname == "") {
        alert("invalid name!");
        return false;
    }

    else if (len < 8) {
        alert("invalid id");
        return false;

    }

    if (!document.getElementById("level3").checked) {
        alert("level should be 3!")
        return false;

    }
    else
        return true;

}

