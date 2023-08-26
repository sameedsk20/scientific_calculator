var screen = document.querySelector('.screen');
var btn = document.querySelectorAll('.button');
var main = document.querySelector('.main');
var colorChange = 0;

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        screen.value += btntext;
    });
}
function changeColor(){
    if(colorChange == 0){
    main.classList.add('active');
    colorChange = 1;
    }
    else{
    main.classList.remove('active');
    colorChange = 0;
    }
}
function equalsTo(){
    screen.value = eval(screen.value);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function ac(){
    screen.value='';
}
function c() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function root(){
    screen.value = Math.sqrt(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function per(){
    screen.value = screen.value / 100 ;
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function sin(){
    screen.value = Math.sin(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function cos(){
    screen.value = Math.cos(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function tan(){
    screen.value = Math.tan(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function e(){
    screen.value = Math.exp(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function log10(){
    screen.value = Math.log10(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function log(){
    screen.value = Math.log(screen.value).toFixed(5);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function factorial(){
    var i, num, f;
    f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i--;
    screen.value = f;
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
function power(){
    screen.value = Math.pow(screen.value);
    screen.classList.add('active');

    setTimeout( () => {
        screen.classList.remove('active');
    }, 1000);
}
