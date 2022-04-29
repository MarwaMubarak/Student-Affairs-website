function LoginValidation() {

    var Pass = document.getElementById("pass").value;
    var User = document.getElementById("user").value;

    if ((User !== 'Nourhan') || (Pass !== '12345')) {
        alert('Invalid Password or Invalid Username!!');
        return false;
    }
}