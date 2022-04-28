function confirmAction() {
    let confirmAction = confirm("Are you sure to Delete this Student");
    if (confirmAction) {
      alert("Student data has been deleted successfully");
    } else {
      alert("deletion canceled");
    }
}
function update()
{
  var entery=document.getElementById("current").value;
  myFunction(entery);

}

function myFunction(entery) {
  var x = document.getElementById("Op").value;
  var phoneform = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nameformat = /^[a-zA-Z]+$/;

  if(x=="GPA")
  {
    if(entery<0||entery>4)
      document.getElementById("feedback").innerHTML = "incorrect GPA! ";
    else if(entery == null || entery == "")
      document.getElementById("feedback").innerHTML = "empty input please enter data";
    else if(isNaN(entery))
      document.getElementById("feedback").innerHTML = "incorrect GPA! enter number";
    else
      document.getElementById("feedback").innerHTML = "Editing GPA done ^^";

  }
  else if(x=="Name")
  {
    if(!entery.match(nameformat))
    document.getElementById("feedback").innerHTML = "incorrect Name";
    else
    document.getElementById("feedback").innerHTML = "Editing Name done ^^";

  }
  else if(x=="Mobile number")
  {
    if(!entery.match(phoneform))
      document.getElementById("feedback").innerHTML = "incorrect Number phone";
    else
      document.getElementById("feedback").innerHTML = "Editing Mobile number done ^^";
  }
  else if(x=="Status")
  {
    if(entery=="active"||entery=="inactive")
      document.getElementById("feedback").innerHTML = "Editing Status done ^^";
    else
      document.getElementById("feedback").innerHTML = "incorrect Status";
  }
  else if(x=="Gender")
  {
    if(entery=="male"||entery=="female")
      document.getElementById("feedback").innerHTML = "Editing Gender done ^^";
    else
      document.getElementById("feedback").innerHTML = "incorrect Gender";

  }
  else if(x=="date of birth")
  {
    document.getElementById("feedback").innerHTML = "Editing date of birth done ^^";
  }
  else if(x=="ID")
  {
    document.getElementById("feedback").innerHTML = "Editing ID done ^^";
  }
  else //email
  {
    if(!entery.match(mailformat))
    {
      document.getElementById("feedback").innerHTML = "incorrect mail";

    }
    else
    {
      document.getElementById("feedback").innerHTML = "Editing email done ^^";
    }
  }
}