var slideNum = 0;

function nextPic(){

    var pics = [document.getElementById("dog"), document.getElementById("cat"),
    document.getElementById("sheep"), document.getElementById("horse"),
    document.getElementById("cow")];

    slideNum +=1;

    if(slideNum >4){
        slideNum =0;
    }

    for(var x =0; x<5; x++){
        pics[x].style.visibility = "hidden";
    }

    pics[slideNum].style.visibility = "visible";
}

function previousPic(){

    var pics = [document.getElementById("dog"), document.getElementById("cat"),
    document.getElementById("sheep"), document.getElementById("horse"),
    document.getElementById("cow")];

    slideNum -=1;

    if(slideNum <0){
        slideNum =4;
    }

    for(var x =0; x<5; x++){
        pics[x].style.visibility = "hidden";
    }

    pics[slideNum].style.visibility = "visible";
}
