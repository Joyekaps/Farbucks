var fullName = document.getElementById("fullname");
var Password = document.getElementById("pass");
var checkBox = document.getElementById("agree");
var phone = document.getElementById("phone");
var address = document.getElementById("address");

function submitData(){
    var symbols = 0;
    var Name = fullName.value;
    for(let i=0; i<Name.length; i++){
        if(!('a' <= Name.charAt(i) && Name.charAt(i) <= 'z' || 'A' <= Name.charAt(i) && Name.charAt(i) <= 'Z' || Name.charAt(i) == ' ')){
            symbols = 1;
        }
    }
    if(symbols) alert("Full Name cannot contain any symbols!");

    var valid = 0;
    var pw = Password.value;

    console.log(pw.length);
    if(pw.length > 6) valid = 1;
    if(!valid) alert("Password must have more than 6 characters!");

    valid = 0;
    var add = address.value;
    if(add.length > 10) valid = 1;
    if(!valid) alert("Address must be longer than 10 characters!");

    var alpha= 0;
    var num = phone.value;
    for(let i=0; i<num.length; i++){
        if(!('0' <= num.charAt(i) && num.charAt(i) <= '9')) alpha = 1;
    }
    if(alpha) alert("Phone Number cannot contain any alphabets!") ;

    if(checkBox.checked == false) alert("You must agree to the terms and conditions!");

}
