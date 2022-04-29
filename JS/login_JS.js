function LoginValidation() {

    var Pass = document.getElementById("pass").value;
    var User = document.getElementById("user").value;

    if ((User !== 'Marwa') || (Pass !== '123')) {
        alert('Invalid Password or Invalid Username!!');
        return false;
    }
}