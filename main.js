function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('myinput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('wrapper');
  li = ul.getElementsByTagName('li');
  for (i=0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = 'none';
    }
  }
}

















function quadCalc() {
    var a = parseFloat(document.getElementById("aval").value);
    var b = parseFloat(document.getElementById("bval").value);
    var c = parseFloat(document.getElementById("cval").value);
    document.getElementById("add-sum").innerHTML = "x: " + (((b*-1)+(Math.sqrt(b*b-(4*a*c))))/(2*a));
    document.getElementById("add2-sum").innerHTML = "x: " + (((b*-1)-(Math.sqrt(b*b-(4*a*c))))/(2*a));
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
var answer1;
var answer2;

function randTrap () {

    var a = Math.floor((Math.random() * 20) + 1);
    var b = Math.floor((Math.random() * 20) + 1);
    var c = Math.floor((Math.random() * 20) + 1);
    var h = Math.floor((Math.random() * 20) + 1);
    document.getElementById("trapvarA").innerHTML = "Side a value: " + a;
    document.getElementById("trapvarB").innerHTML = "Side b value: " + b;
    document.getElementById("trapvarC").innerHTML = "Side c value: " + c;
    document.getElementById("trapvarH").innerHTML = "Side h value: " + h;
    answer1 = ((a+b)/2)*h;
    answer2 = (a+b+c+c);
}
function trapAnswer () {

    var user = parseFloat(document.getElementById("tAnswer1").value);
    var user2 = parseFloat(document.getElementById("tAnswer2").value);
    if (answer1 == user) {
        document.getElementById("trapCheck1").innerHTML = "Area: Correct!";
    } else {
        document.getElementById("trapCheck1").innerHTML = "Area: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("trapCheck2").innerHTML = "Perimeter: Correct!";

    } else {
        document.getElementById("trapCheck2").innerHTML = "Perimeter: Incorrect!";
    }
}

function randRect () {
  var l = Math.floor((Math.random() * 20) + 1);
  var w = Math.floor((Math.random() * 20) + 1);
  document.getElementById("rectvarA").innerHTML = "Length value: " + l;
  document.getElementById("rectvarB").innerHTML = "Width value: " + w;

  answer1 = l*w;
}

function rectAnswer () {
  var user = parseFloat(document.getElementById("rectAnswer2").value);
  if (answer1 == user) {
      document.getElementById("rectCheck").innerHTML = "Correct!";

  } else {
      document.getElementById("rectCheck").innerHTML = "Incorrect!";
  }
}
function randQuad () {
    var a = Math.floor((Math.random() * 2) + 1);
    var b = Math.floor((Math.random() * 10) + 1);
    var c = Math.floor((Math.random() * 10) + 1);
    document.getElementById("quadvarA").innerHTML = "A value: " + a;
    document.getElementById("quadvarB").innerHTML = "B value: " + b;
    document.getElementById("quadvarC").innerHTML = "C value: " + c;
    answer1 = (((b*-1)+(Math.sqrt(b*b-(4*a*c))))/(2*a)).toFixed(2);
    answer2 = (((b*-1)-(Math.sqrt(b*b-(4*a*c))))/(2*a)).toFixed(2);
}

function quadAnswer () {
    var user = parseFloat(document.getElementById("qAnswer1").value);
    var user2 = parseFloat(document.getElementById("qAnswer2").value);
    if (answer1 == user) {
        document.getElementById("quadCheck1").innerHTML = "Correct!";

    } else {
        document.getElementById("quadCheck1").innerHTML = "Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("quadCheck2").innerHTML = "Correct!";

    } else {
        document.getElementById("quadCheck2").innerHTML = "Incorrect!";
    }
}
function randPar () {
    var a = Math.floor((Math.random() * 20) + 1);
    var b = Math.floor((Math.random() * 20) + 1);
    var h = Math.floor((Math.random() * 20) + 1);
    document.getElementById("parvarA").innerHTML = "A value: " + a;
    document.getElementById("parvarB").innerHTML = "B value: " + b;
    document.getElementById("parvarH").innerHTML = "H value: " + h;
    answer1 = ((2*a) + (2*b));
    answer2 = (b*h);
}

function parAnswer () {
    var user = parseFloat(document.getElementById("pAnswer1").value);
    var user2 = parseFloat(document.getElementById("pAnswer2").value);
    if (answer1 == user) {
        document.getElementById("parCheck1").innerHTML = "Area: Correct!";

    } else {
        document.getElementById("parCheck1").innerHTML = "Area: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("parCheck2").innerHTML = "Parameter: Correct!";

    } else {
        document.getElementById("parCheck2").innerHTML = "Parameter: Incorrect!";
    }
}
function randCylinder () {
    var r = Math.floor((Math.random() * 20) + 1);
    var h = Math.floor((Math.random() * 20) + 1);

    document.getElementById("cyvarR").innerHTML = "R value: " + r;
    document.getElementById("cyvarH").innerHTML = "H value: " + h;

    answer1 = (Math.PI * (r * r) * h).toFixed(2);
    answer2 = (2 * Math.PI * r * (h+r)).toFixed(2);
}

function cylinderAnswer () {
    var user = parseFloat(document.getElementById("cAnswer1").value);
    var user2 = parseFloat(document.getElementById("cAnswer2").value);
    if (answer1 == user) {
        document.getElementById("cyCheck1").innerHTML = "Volume: Correct!";

    } else {
        document.getElementById("cyCheck1").innerHTML = "Volume: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("cyCheck2").innerHTML = "Surface Area: Correct!";

    } else {
        document.getElementById("cyCheck2").innerHTML = "Surface Area: Incorrect!";
    }
}
function randDistance() {
    var x1 = Math.floor((Math.random() * 20) + 1);
    var x2 = Math.floor((Math.random() * 20) + 1);
    var y1 = Math.floor((Math.random() * 20) + 1);
    var y2 = Math.floor((Math.random() * 20) + 1);
    document.getElementById("disvalx").innerHTML = "X1 value: " + x1;
    document.getElementById("disvalx2").innerHTML = "X2 value: " + x2;
    document.getElementById("disvaly").innerHTML = "Y1 value: " + y1;
    document.getElementById("disvaly2").innerHTML = "Y2 value: " + y2;

    answer1 = Math.sqrt(Math.pow(x2-x1, 2)+Math.pow(y2-y1, 2)).toFixed(2);

}

function distanceAnswer () {
    var user = parseFloat(document.getElementById("dAnswer1").value);

    if (answer1 == user) {
        document.getElementById("disCheck1").innerHTML = "Distance: Correct!";

    } else {
        document.getElementById("disCheck1").innerHTML = "Distance: Incorrect!";
    }

}
function randCircle() {
    var r = Math.floor((Math.random() * 20) + 1);

    document.getElementById("circler").innerHTML = "r value: " + r;

    answer1 = (Math.PI*r*r).toFixed(2);
    answer2 = (2*r*Math.PI).toFixed(2);
}

function circleAnswer () {
    var user = parseFloat(document.getElementById("cAnswer1").value);
    var user2 = parseFloat(document.getElementById("cAnswer2").value);
    if (answer1 == user) {
        document.getElementById("circCheck1").innerHTML = "Area: Correct!";

    } else {
        document.getElementById("circCheck1").innerHTML = "Area: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("circCheck2").innerHTML = "Circumference: Correct!";

    } else {
        document.getElementById("circCheck2").innerHTML = "Circumference: Incorrect!";
    }


}
function randPyramid() {
    var b = Math.floor((Math.random() * 20) + 1);
    var h = Math.floor((Math.random() * 20) + 1);
    var l = Math.floor((Math.random() * 20) + 1);
    document.getElementById("pyrab").innerHTML = "r value: " + b;
    document.getElementById("pyrah").innerHTML = "r value: " + h;
    document.getElementById("pyral").innerHTML = "r value: " + l;
    answer1 = ((b*b*h)/3).toFixed(2);
    answer2 = ((b*b) + (2 * b) * Math.sqrt(b*b/4 + (h*h))).toFixed(2);
}

function pyramidAnswer () {
    var user = parseFloat(document.getElementById("pAnswer1").value);
    var user2 = parseFloat(document.getElementById("pAnswer2").value);
    if (answer1 == user) {
        document.getElementById("pyraCheck1").innerHTML = "Volume: Correct!";

    } else {
        document.getElementById("pyraCheck1").innerHTML = "Volume: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("pyraCheck2").innerHTML = "Surface Area: Correct!";

    } else {
        document.getElementById("pyraCheck2").innerHTML = "Surface Area: Incorrect!";
    }


}
function randMidpoint() {
    var x1 = Math.floor((Math.random() * 20) + 1);
    var x2 = Math.floor((Math.random() * 20) + 1);
    var y1 = Math.floor((Math.random() * 20) + 1);
    var y2 = Math.floor((Math.random() * 20) + 1);
    document.getElementById("midvalx").innerHTML = "X1 value: " + x1;
    document.getElementById("midvalx2").innerHTML = "X2 value: " + x2;
    document.getElementById("midvaly").innerHTML = "Y1 value: " + y1;
    document.getElementById("midvaly2").innerHTML = "Y2 value: " + y2;

    answer1 = ((x1 + x2)/2).toFixed(2);
    answer2 =  ((y1 + y2)/2).toFixed(2);

}


function midpointAnswer () {
    var user = parseFloat(document.getElementById("mAnswer1").value);
    var user2 = parseFloat(document.getElementById("mAnswer2").value);
    if (answer1 == user) {
        document.getElementById("midCheck1").innerHTML = "x val: Correct!";

    } else {
        document.getElementById("midCheck1").innerHTML = "x val: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("midCheck2").innerHTML = "y val: Correct!";

    } else {
        document.getElementById("midCheck2").innerHTML = "y val: Incorrect!";
    }
}
function randRectPrism() {
    var l = Math.floor((Math.random() * 20) + 1);
    var w = Math.floor((Math.random() * 20) + 1);
    var h = Math.floor((Math.random() * 20) + 1);

    document.getElementById("rectvall").innerHTML = "l value: " + l;
    document.getElementById("rectvalw").innerHTML = "w value: " + w;
    document.getElementById("rectvalh").innerHTML = "h value: " + h;


    answer1 = (l*w*h).toFixed(2);
    answer2 =  (2*(l*w+ l*h +w*h)).toFixed(2);

}


function rectPrsimAnswer () {
    var user = parseFloat(document.getElementById("rAnswer1").value);
    var user2 = parseFloat(document.getElementById("rAnswer2").value);
    if (answer1 == user) {
        document.getElementById("rectCheck1").innerHTML = "Area: Correct!";

    } else {
        document.getElementById("rectCheck1").innerHTML = "Area: Incorrect!";
    }
    if (answer2 == user2) {
        document.getElementById("rectCheck2").innerHTML = "Surface Area: Correct!";

    } else {
        document.getElementById("rectCheck2").innerHTML = "Surface Area: Incorrect!";
    }
}
function randSlope() {
    var x1 = Math.floor((Math.random() * 20) + 1);
    var x2 = Math.floor((Math.random() * 20) + 1);
    var y1 = Math.floor((Math.random() * 20) + 1);
    var y2 = Math.floor((Math.random() * 20) + 1);
    document.getElementById("slopevalx").innerHTML = "X1 value: " + x1;
    document.getElementById("slopevalx2").innerHTML = "X2 value: " + x2;
    document.getElementById("slopevaly").innerHTML = "Y1 value: " + y1;
    document.getElementById("slopevaly2").innerHTML = "Y2 value: " + y2;

    answer1 =  ((x2-x1)/(y2-y1)).toFixed(2);


}


function slopeAnswer () {
    var user = parseFloat(document.getElementById("sAnswer1").value);

    if (answer1 == user) {
        document.getElementById("slopeCheck1").innerHTML = "Slope: Correct!";

    } else {
        document.getElementById("slopeCheck1").innerHTML = "Slope: Incorrect!";
    }

}
