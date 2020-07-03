var soz = "Website?";
var i = 0;
var j = soz.length - 1;
var time = 350;

function Writer() {
    soz = "Website?";
    document.querySelector(".second i").style.animationName = "write";
    if (i < soz.length) {
        document.querySelector(".yeni").innerHTML += soz.charAt(i);
        i++;
        setTimeout(Writer, time);
    } else i = 0;
}

function Eraser() {
    document.querySelector(".second i").style.animationName = "erase";
    if (j >= 0) {
        soz = soz.substr(0, j);
        document.querySelector(".yeni").innerHTML = soz;
        j--;
        setTimeout(Eraser, time);
    } else j = soz.length - 1;
}

setInterval(Writer, 5000);
setInterval(Eraser, 10000);


/*setTimeout(function() {
    setInterval(function() {
        Writer()
    }, 5000);
    setInterval(function() {
        Eraser()
    }, 10000);
}, 0000);*/

/*setTimeout(function() {
        Writer();
        Eraser();
    },
    1000);*/

/*setInterval(() => {
    Writer();
    Eraser();
}, 1000);*/