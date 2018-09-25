function change(){

    //Access the tag:
    var text = document.getElementById("text");

    //border variables
    var br = document.getElementById("borderRed").value;
    var bg = document.getElementById("borderGreen").value;
    var bb = document.getElementById("borderBlue").value;
    var bw = document.getElementById("borderWidth").value;

    //background variables
    var bgr = document.getElementById("bgRed").value;
    var bgg = document.getElementById("bgGreen").value;
    var bgb = document.getElementById("bgBlue").value;

    var base =10;

    //Change the style attribute
    document.body.style.backgroundColor = rgb(parseInt(bgr, base),parseInt(bgg, base), parseInt(bgb, base), 0);
    document.body.style.borderColor = rgb(parseInt(br, base),parseInt(bg, base), parseInt(bb, base), 0);
    document.body.style.borderWidth = parseInt(bw, base);
}

function rgb(r,g,b, def) {
    def = parseInt(def, 10) || 0;
        return 'rgb(' + [(r||def),(g||def),(b||def)].join(',') + ')';
}
