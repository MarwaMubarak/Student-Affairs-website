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
  console.log(entery);
  console.log(x);
  var phoneform = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(x=="GPA")
  {
    if(entery<0||entery>4)
      document.getElementById("feedback").innerHTML = "incorrect GPA! ";
    else if(entery == null || entery == "")
      document.getElementById("feedback").innerHTML = "empty input please enter data";
    else if(isNaN(entery))
      document.getElementById("feedback").innerHTML = "incorrect GPA! enter number";
    else
      document.getElementById("feedback").innerHTML = "Editing done ^^";

  }
  else if(x=="Name")
  {
    if(typeof entery === 'string')
    document.getElementById("feedback").innerHTML = "Editing done ^^";
    else
      document.getElementById("feedback").innerHTML = "incorrect Name";
  }
  else if(x=="Mobile number")
  {
    if(!entery.match(phoneform))
      document.getElementById("feedback").innerHTML = "incorrect Number phone";
    else
      document.getElementById("feedback").innerHTML = "Editing done ^^";
  }
  else if(x=="Status")
  {
    if(entery=="active"||entery=="inactive")
      document.getElementById("feedback").innerHTML = "Editing done ^^";
    else
      document.getElementById("feedback").innerHTML = "incorrect Status";
  }
  else if(x=="Gender")
  {
    if(entery=="male"||entery=="female")
      document.getElementById("feedback").innerHTML = "Editing done ^^";
    else
      document.getElementById("feedback").innerHTML = "incorrect Gender";

  }
  else if(x=="date of birth")
  {
    document.getElementById("feedback").innerHTML = "Editing done ^^";
  }
  else //email
  {
    if(!entery.match(mailformat))
    {
      document.getElementById("feedback").innerHTML = "incorrect mail";

    }
    else
    {
      document.getElementById("feedback").innerHTML = "Editing done ^^";
    }
  }
}