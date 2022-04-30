function LoginValidation(form) {

    let Pass = document.getElementById("pass").value;
    let User = document.getElementById("user").value;

    if ((User !== 'Nourhan') || (Pass !== '12345')) {
        alert('Invalid Password or Invalid Username!!');
        return false;
    } else {
        form.action = "home_page.html";

        return false;

    }

}