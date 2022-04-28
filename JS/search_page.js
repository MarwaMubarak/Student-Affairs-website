function checkInp()
{
    let id = document.forms['myform']["ID"].value;
    if(id<1||id>=70000000||id==""||id==null)
    {
        alert("The ID isn't Valid");
        return false;
    }
}
