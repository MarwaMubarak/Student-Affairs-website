function validateForm()
{
    let studentName=document.forms["myform"]["StudentName"].value; 
    let number=document.forms["myform"]["Number"].value; 
    let email=document.forms['myform']["Email"].value;
    let id = document.forms['myform']["ID"].value;
    let gpa=document.forms['myform']["GPA"].value;
    var nameformat = /^[ a-zA-Z]+$/;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneformt = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(studentName==null || studentName==""||!studentName.match(nameformat) )
    {
        alert("Student Name isn't Valid");
        return false;
    }
    else if(!number.match(phoneformt)||number==""||number==null)
    {
        alert("The Number isn't Valid");
        return false;
    }
    else if(!email.match(mailformat)||email==""||email==null)
    {
        alert("The Email isn't Valid");
        return false;
    }
    else if(id<1||id>=100000000||id==""||id==null)
    {
        alert("The ID isn't Valid");
        return false;
    }
    else if(gpa<0||gpa>4||gpa==""||gpa==null)
    {
        alert("The GPA isn't Valid");
        return false;
    }
    else {return true;}
}