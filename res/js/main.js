
// {} - scope
// // function fce(){
// //     console.log("Ahoj svete");
// // }

// () => - arrow funkce
// // const fce2 = () => {
// //     console.log("Ahoj svete");
// // }

//     parametr
// // function konsel(item) {
// //     console.log(`Prinesl jsem ${item}`);
// // }

//     parametr
// // const konsel2 = (item, item2) => {
// //     console.log(`Prinesl jsem ${item} a ${item2}`);
// // }

//      argument
// // konsel("piti");

//      argument
// // konsel("zidle");

//      argument
// // konsel("urbana", "bobika");

//      argument
// // konsel("jidlo", "piti");

// function sum(a, b){
//     console.log(a + b);
// }

// let resultOne = sum(6,4);
// let resultTwo = sum(10,4);

// console.log(resultOne + resultTwo);

// sum(6, 4);
// sum(9, 1);
// sum(8, 2);
// sum(5, 7);
// sum(6, 3);

// // let numberOne = 1;
// // let numberTwo = 2;

// // let numberThree = 3;
// // let numberFour = 4;

// // function sumF(a,b){
// //     return a + b;
// // }

// // const sum = (a, b) => a + b;

// //  let resultOne = sum(numberOne, numberTwo);
// //  let resultTwo = sum(numberThree, numberFour);

// // console.log (sumF(resultOne, resultTwo));

// // let name = "Matěj";
// // let age = 16;

// // const getSentence = (person, age) => `Tvoje jméno je ${person} a je ti ${age} let`;

// // let sentence = getSentence (name, age);
// // console.log(sentence);

const cube = document.getElementById("cube");
const cube2 = document.getElementById("cube2");
let gameInterval;
cube.onclick = () =>{
    const audio = new Audio("/res/audio/kafu.mp3");
    audio.play();
    cube.style.display = "none"; // none - pryc, block - objeví se
    changeColor(cube, 20,300,70);
    changeColor(cube2, 110,150,110);
    setNumber(cube2, 0);
    setCookieClicker(cube2);
    moveElement(cube2, 300,400);
    startGameInterval();
};

const changeColor = (element, red, green, blue,) =>{
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const setNumber = (element, number) => {
    element.innerHTML = number;
}
let timeStart = 0;
const setCookieClicker = (element) => {
    element.onclick = () => {
        element.innerText++;
        moveElement(cube2, getRandomNumber(0,window.innerWidth), getRandomNumber(0,window.innerHeight));
        let customSize = getRandomNumber(10,100);
        setSize(element, customSize,customSize);
        if (timeStart == 0) {
            timeStart = performance.now();
        }else{
            let timeEnd = performance.now();
            let result = timeEnd - timeStart;
            cube.innerHTML = `<h1><i>OSU</i></h1><p></p>${Math.round((result*10)/1000)/10}s`;
            timeStart = performance.now();
        }
    }
}

const moveElement = (element, x, y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
}
const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const setSize = (element,width, height) => {
    element.style.width = `${width}px`;
    element.style.width = `${height}px`;
}

const startGameInterval = () => {
    clearInterval(gameInterval);
    gameInterval = setInterval (() =>{
    moveElement(cube2, getRandomNumber(0,window.innerWidth), getRandomNumber(0,window.innerHeight));
    let customSize = getRandomNumber(10,100);
    setSize(cube2, customSize,customSize);
}, 1100);
}
