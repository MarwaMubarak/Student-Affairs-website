function validateForm()
{
    
    let id = document.forms['myform']["ID"].value;
    console.log(id);
    if(id<1||id>=70000000||id==""||id==null)
    {
        alert("The ID isn't Valid");
        return false;
    }
    else 
    return true;
}
