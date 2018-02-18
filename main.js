function quadCalc() {
    var a = parseFloat(document.getElementById("aval").value);
    var b = parseFloat(document.getElementById("bval").value);
    var c = parseFloat(document.getElementById("cval").value);
    document.getElementById("add-sum").innerHTML = "x: " + (((b*-1)+(Math.sqrt(b*b-(4*a*c))))/(2*a))*-1;
    document.getElementById("add2-sum").innerHTML = "x: " + (((b*-1)-(Math.sqrt(b*b-(4*a*c))))/(2*a))*-1;
}
function circleCalc() {
    var r = parseFloat(document.getElementById("rval").value);
    document.getElementById("circlear").innerHTML = "Area: " + (Math.PI*r*r);
    document.getElementById("circlecirc").innerHTML = "Circumference: " + (2*r*Math.PI);
}
function coneCalc() {
    var r = parseFloat(document.getElementById("rval").value);
    var h = parseFloat(document.getElementById("hval").value);
    document.getElementById("conevol").innerHTML = "Volume: " + (Math.PI*r*r*h)/3;
    document.getElementById("coneSA").innerHTML = "Surface Area: " + (Math.PI*r*(Math.sqrt((r*r) + (h*h)) + r));
    document.getElementById("coneLSA").innerHTML = "Lateral Surface Area: " + (Math.PI*r*(Math.sqrt((r*r) + (h*h))));
}
function cylinderCalc() {
    var r = parseFloat(document.getElementById("rval").value);
    var h = parseFloat(document.getElementById("hval").value);
    document.getElementById("cylvol").innerHTML = "Volume: " + (Math.PI * (r * r) * h);
    document.getElementById("cylSA").innerHTML = "Surface Area: " + (2 * Math.PI * r * (h+r));
}
function distanceCalc() {
    var x1 = parseFloat(document.getElementById("xval1").value);
    var x2 = parseFloat(document.getElementById("xval2").value);
    var y1 = parseFloat(document.getElementById("yval1").value);
    var y2 = parseFloat(document.getElementById("yval2").value);
    document.getElementById("dis-sum").innerHTML = "Distance: " + Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2));
}
function midPointCalc() {
    var x1 = parseFloat(document.getElementById("xval1").value);
    var x2 = parseFloat(document.getElementById("xval2").value);
    var y1 = parseFloat(document.getElementById("yval1").value);
    var y2 = parseFloat(document.getElementById("yval2").value);
    document.getElementById("mid-sum").innerHTML = "(" + ((x1 + x2)/2) +  "," + ((y1 + y2)/2) + ")";
}
function parCalc() {
    var a = parseFloat(document.getElementById("paval").value);
    var b = parseFloat(document.getElementById("pbval").value);
    var h = parseFloat(document.getElementById("phval").value);
    document.getElementById("pararea").innerHTML = "Area: " + ((2*a) + (2*b)) ;
    document.getElementById("parper").innerHTML = "Perimeter: " + (b*h);
}
function pyramidCalc() {
    var b = parseFloat(document.getElementById("bval").value);
    var h = parseFloat(document.getElementById("hval").value);
    var l = parseFloat(document.getElementById("lval").value);
    document.getElementById("pyravol").innerHTML = "Volume: " + (b*b*h)/3;
    document.getElementById("pyraSA").innerHTML = "Surface Area: " + ((b*b) + (2 * b) * Math.sqrt(b*b/4 + (h*h)));
}
function pythaCalc() {
    var a = parseFloat(document.getElementById("paval").value);
    var b = parseFloat(document.getElementById("pbval").value);
    var c = parseFloat(document.getElementById("pcval").value);
    document.getElementById("pytha1").innerHTML = "a: " + Math.sqrt((c*c - b*b));
    document.getElementById("pytha2").innerHTML = "b: " + Math.sqrt((c*c - a*a));
    document.getElementById("pytha3").innerHTML = "c: " + Math.sqrt((a*a + b*b));

}
function rectangleCalc() {
    var a = parseFloat(document.getElementById("wval").value);
    var b = parseFloat(document.getElementById("lval").value);
    document.getElementById("rec-area").innerHTML = "Area: " + a*b;
    document.getElementById("rec-per").innerHTML = "Perimeter: " + ((2*a)+(2*b));
}
function rectPrismCalc() {
    var l = parseFloat(document.getElementById("lval").value);
    var w = parseFloat(document.getElementById("wval").value);
    var h = parseFloat(document.getElementById("hval").value);
    document.getElementById("rectvol").innerHTML = "Volume: " + (l*w*h);
    document.getElementById("rectSA").innerHTML = "Surface Area: " + (2*(l*w+ l*h +w*h));
}
function slopeCalc() {
    var x1 = parseFloat(document.getElementById("xval1").value);
    var x2 = parseFloat(document.getElementById("xval2").value);
    var y1 = parseFloat(document.getElementById("yval1").value);
    var y2 = parseFloat(document.getElementById("yval2").value);
    document.getElementById("slope-sum").innerHTML = "Slope: " + (x2-x1)/(y2-y1);
}
function sphereCalc() {
    var r = parseFloat(document.getElementById("rval").value);
    document.getElementById("spherevol").innerHTML = "Volume: " +(4*Math.PI*r*r*r)/3
    document.getElementById("sphereSA").innerHTML = "Surface Area: " + 4*Math.PI*r*r; ;
}
function trapCalc() {
    var a = parseFloat(document.getElementById("taval").value);
    var b = parseFloat(document.getElementById("tbval").value);
    var c = parseFloat(document.getElementById("tcval").value);

    var h = parseFloat(document.getElementById("thval").value);
    document.getElementById("traparea").innerHTML = "Area: " +((a+b)/2)*h;
    document.getElementById("trapper").innerHTML = "Perimeter: " + (a+b+c+c);
}
function triangleCalc() {
    var a = parseFloat(document.getElementById("bval").value);
    var b = parseFloat(document.getElementById("hval").value);
    var a2 = parseFloat(document.getElementById("aval").value);
    var d = parseFloat(document.getElementById("dval").value);
    var c2 = parseFloat(document.getElementById("cval").value);
    document.getElementById("tri-area").innerHTML = "Area: " + (a*b)/2;
    document.getElementById("tri-per").innerHTML = "Perimeter: " + (a2+d+c2);
}