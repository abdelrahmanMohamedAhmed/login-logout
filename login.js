var userMail = document.getElementById("mail");
var userPassword = document.getElementById("password");
var loginBtn= document.getElementById("loginBtn");
var dataList=[];
if(localStorage.getItem('data',JSON.stringify(dataList)) != null )
{
    dataList=JSON.parse(localStorage.getItem('data'));
    console.log(dataList);
}

 loginBtn.addEventListener('click',function sendData()
{

    dataList=[
         
        {
            mail:userMail.value ,
            password:userPassword.value
        }
         
    ]
    localStorage.setItem('data',JSON.stringify(dataList));
    clearValue();
    console.log(dataList);
})
function clearValue()
{
    userMail.value="";
    userPassword.value="";
}
