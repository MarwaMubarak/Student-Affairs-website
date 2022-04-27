function validateForm()
{
    let studentName=document.forms["myform"]["StudentName"].value; 
    let number=document.forms["myform"]["Number"].value; 
    let email=document.forms['myform']["Email"].value;
    let id = document.forms['myform']["ID"].value;
    let gpa=document.forms['myform']["GPA"].value;
    let Birthday=document.forms['myform']['birthday'];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneform = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(studentName==null || studentName=="" )
    {
        alert("Name can't be left blank");
        return false;
    }
    else if(!number.match(phoneform)||number==""||number==null)
    {
        alert("The Number isn't Valid");
        return false;
    }
    else if(!email.match(mailformat)||email==""||email==null)
    {
        alert("The Email isn't Valid");
        return false;
    }
    else if(id<1||id>=700000000||id==""||id==null)
    {
        alert("The ID isn't Valid");
        return false;
    }
    else if(gpa<0||gpa>4)
    {
        alert("The GPA isn't Valid");
        return false;
    }
    else
    {
        return true;
    }

}