mousePos = { x: 0, y: 0 };
newMousePos = { x: 0, y: 0 };
let positionInit = { x: 0, y: 0 };
let distanceVect = { x: 0, y: 0 };
let RotationLock = { x: 0, y: 0 };

let timeOutEye;

const EyeSrc = ["./common/Images/pupilleReduitBig.png", "./common/Images/pupilleCross.png"];
const Eye = document.getElementById('eyeImage');
const nbHref = document.getElementsByTagName("a");

let rect = Eye.getBoundingClientRect();
const styleInit = window.getComputedStyle(Eye);
const Matrix = new DOMMatrix(styleInit.transform);

const width = rect.width;
const height = rect.height;
const maxSize = { x: width, y: height * 0.5 };
positionInit.x = Matrix.m41*100/width;
positionInit.y = 120;


Eye.onmousemove = followMouse;
Eye.onmouseout = Reset;
for (let i = 0; i < nbHref.length; i++) {
    nbHref[i].onmousemove = followMouse;
    nbHref[i].onmouseout = Reset;
}
function followMouse(event) {

    rect = Eye.getBoundingClientRect();
    event.preventDefault();
    mousePos.x = event.pageX;
    mousePos.y = event.pageY;

    //normaliser puis faire le calcul avec la normalisation, pas de if. si pas assez de mouvement, mult en fonction de la noramlisation (>.5 alors x2)
    distanceVect.x = (mousePos.x - rect.left - rect.width/2);
    distanceVect.y = (mousePos.y - rect.top - rect.height/2-window.scrollY); //window.scrollY pour prendre en compte un scroll: la position rect.top ne prend pas en compte la position de l'objet sur la fenetre!

    xValue = (distanceVect.x / Math.abs(distanceVect.x)); //signe/direction
    yvalue = (distanceVect.y / Math.abs(distanceVect.y));

    newMousePos.x = Math.abs(distanceVect.x) > width-10 ? positionInit.x + (width-10) * xValue : positionInit.x + distanceVect.x * 2;
    newMousePos.y = Math.abs(distanceVect.y) > height ? positionInit.y + height*.5 * yvalue : positionInit.y + distanceVect.y*.5;

    distanceVect.x = distanceVect.x > 60 ? 60 : (distanceVect.x < -60 ? -60 : distanceVect.x);
    distanceVect.y = distanceVect.y > 10 ? 10 : (distanceVect.y < -10 ? -10  : distanceVect.y);

    Eye.style.transform = `translateX(${newMousePos.x}%) translateY(${newMousePos.y}%) rotateY(${distanceVect.x}deg) rotateX(${-distanceVect.y}deg)`;
}

function Reset(event) {
    Eye.style.transform = `translateX(${positionInit.x}%) translateY(${positionInit.y}%) rotateY(${0}deg) rotateX(${0}deg)`;
}

function RandomEye(event) {
    window.clearTimeout(timeOutEye);
    Eye.src = EyeSrc[1];
    randomNum = Math.random().toFixed(2);
    timeOutEye = setTimeout(ResetEye, (randomNum < 0.2 ? 0.2 : randomNum)*1000);
}

function ResetEye() {
    Eye.src = EyeSrc[0];
}