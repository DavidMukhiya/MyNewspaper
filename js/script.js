function validation(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;

    var firstnamecheck = /^[A-Za-z]{3,20}$/;
    var lastnamecheck = /^[A-Za-z]{3,20}$/;
    var usernamecheck = /^[A-Za-z0-9.]{3,20}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*()-])[A-Za-z0-9!@#$-_%^&*()]{8,20}$/;
    var emailcheck = /^[A-Za-z]{1,}[_.A-Za-z0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var numbercheck =  /^[0-9]{10}$/;

    if(firstnamecheck.test(firstname)){
        document.getElementById('firstnameerror').innerHTML = " ";
    }else{
        document.getElementById('firstnameerror').innerHTML = "** firstname is invalid";
        return false;
    }

    if(lastnamecheck.test(lastname)){
        document.getElementById('lastnameerror').innerHTML = " ";
    }else{
        document.getElementById('lastnameerror').innerHTML = "** lastname is invalid";
        return false;
    }

    if(usernamecheck.test(username)){
        document.getElementById('usernameerror').innerHTML = " ";
    }else{
        document.getElementById('usernameerror').innerHTML = "** username is invalid";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML = " ";
    }else{
        document.getElementById('passworderror').innerHTML = "** password is invalid";
        return false;
    }

    if(cpassword.match(password)){
        document.getElementById('cpassworderror').innerHTML = " ";
    }else{
        document.getElementById('cpassworderror').innerHTML = " ** password is not Matching";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = "** email is invalid";
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById('numbererror').innerHTML = " ";
    }else{
        document.getElementById('numbererror').innerHTML = "** Mobile Number is invalid";
        return false;
    }







    //alert(username);
}