$().ready(function() {
    $("#validate-form").validate({
        onfocusout: false,
        onkeyup: true,
        onclick: true,
        rules: {
            "name": {
                required: true,
            },
            "email": {
                required: true,
                email:true
            },
            "content": {
                required: true
            },
            "company":{
                required: true
            },
            "nature":{
                required: true
            },
            "regarding":{
                required: true
            },
            "date":{
                required: true
            },
            "firstname":{
                required: true
            },
            "lastname":{
                required: true
            }
        },
        messages: {
            "name": {
                required: "Enter your name"
            },
            "email": {
                required: "Enter your email",
                email:"Hãy nhập đúng định dạng email"
            },
            "content": {
                required: "Enter your message"
            },
            "company":{
                required: "Enter your company"
            },
            "nature":{
                required: "Enter your nature"
            },
            "regarding":{
                required: "Enter your regarding"
            },
            "date":{
                required: "Please check out",
            },
            "firstname":{
                required: "Enter your firstname"
            },
            "lastname":{
                required: "Enter your lastname"
            }
        }
    });
    $("#RegForm").validate({
        onfocusout: false,
        onkeyup: true,
        onclick: true,
        rules: {
            "user": {
                required: true,
                maxlength: 15
            },
            "firstname": {
                required: true,
                maxlength: 15
            },
            "lastname": {
                required: true,
                maxlength: 15
            },
            "date": {
                required: true,
            },
            "address": {
                required: true,
            },
            "email": {
                required: true,
                email:true
            },
            "password": {
                required: true,
                minlength: 8
            },
            "re-password": {
                equalTo: "#password",
                minlength: 8
            }
            },
        messages: {
            "user": {
                required: "Enter username",
                maxlength: "",
            },
            "firstname": {
                required: "Enter firstname",
                maxlength: 15
            },
            "lastname": {
                required: "Enter lastname",
                maxlength: 15
            },
            "date": {
                required: "Enter birthday"
            },
            "address": {
                required: "Enter address"
            },
            "email": {
                required: "Enter email",
                email:"",
            },
            "password": {
                required: "Enter password",
                minlength: ""
            },
            "re-password": {
                equalTo: "Enter re-password",
                minlength: ""
            }
        }
    });
    $("#LoginForm").validate({
        onfocusout: false,
        onkeyup: true,
        onclick: true,
        rules: {
            "user": {
                required: true,
            },
            "password": {
                required: true,
            }
        },
        messages: {
            "user": {
                required: "Enter your Account",
            },
            "password": {
                required: "Enter your password",
            }
        }
    });
});

/*----------------------------------form------------------------------------------*/
var LoginForm = document.getElementById("LoginForm");
var ResForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function login(){
    ResForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function register(){
    ResForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
