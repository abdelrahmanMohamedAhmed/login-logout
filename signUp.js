var userName = document.getElementById("name").value;
var userMail = document.getElementById("mail").value;
var userPassword = document.getElementById("password").value;
var signUpBtn= document.getElementById("signUpBtn").value;
var dataList=[];


signUpBtn.addEventListener('click', function(){


 addNewUser(){
    if(localStorage.getItem('data',JSON.stringify(dataList)) != null )
    {
        alert(`this ${userMail.value} already taken try anothor one `);
    }
    else 
    {
        dataList = [{
            name: userName.value,
            mail: userMail.value,
            password: userPassword.value
        }];
        localStorage.setItem('dataNew', JSON.stringify(dataList));
        // clearValue();

     }
}})
function clearValue()
{
    userMail.value="";
    userPassword.value="";
}

