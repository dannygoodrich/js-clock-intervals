
/*let seconds = 360/60;
let minutes = 360/60/60;
let hours = 360/60/60/60;
*/
scount = 0;
mcount = 0;
hcount = 0;
var degrees = 45;



/*function moveHands(){
    document.getElementById("second").style = "transform:rotate(" + count + "deg);";
    document.getElementById("minute").style = "transform:rotate(" + minutes + "deg);";
    document.getElementById("hour").style = "transform:rotate(" + hours + "deg);";
    count++;
    
};
*/
setInterval(function() {
    console.log("TICK!");
    document.getElementById("second").style = "transform:rotate(" + scount + "deg);";
    document.getElementById("minute").style = "transform:rotate(" + mcount + "deg);";
    document.getElementById("hour").style = "transform:rotate(" + hcount + "deg);";
    scount+= 6;
    mcount+= .1;
    hcount+= .008333333333333;
}, 1000);
//setInterval(moveHands, 1000);

