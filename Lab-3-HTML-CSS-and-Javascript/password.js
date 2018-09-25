function getValue(){
    var firstInput = document.getElementById("firstInput").value;
    var secondInput = document.getElementById("secondInput").value;
    var out = document.getElementById("output");


    if(firstInput == "" || secondInput == ""){
        alert("You must fill in both input boxes");
    }else if(firstInput != secondInput){
        alert("Your passwords do not match. Try again");
        out.innerHTML = "no match";
    }else{
        alert("You have successfully created your password");
        out.innerHTML = "Your new password is: " + firstInput;
    }
}
