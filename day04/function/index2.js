//함수 : input[str,num,bool,array,element,function...] -> output

// f(x) = x + 10;
// 10 -> 20, 20 -> 30

// 고1,2 수학 [합성함수],
// f(g(x))

// function test(x) {
//     return 100;
// }

// function a() {
//     return 1;
// }

// a()
// test() * test() //10000

// function abc(x) {
//     x()
//     return 1;
// }
// function name(x) {
//     console.log(`${x} 야 안녕!`);
// }

// function kim() {
//     console.log(`김씨 안녕`);
// }

// abc(kim);
// name("장원영");
// name("안유진");
// kim();

function getTen() {
    return 10;
}

function getOne() {
    return 1;
}

// 콜백함수
function abc(x, y) {
    return x() + y();
}
abc(getTen, getOne); // 11

const getTen2 = () => 10; // = getTen()
const getOne2 = () => 1; // = getOne()
const abc2 = () => x() + y(); // = abc()

const arr = [1,10,"apple","banana", 3];

const test = (x) => {
    console.log(`${x} 입니다.`);
}
arr.forEach(test);
arr.forEach((v) => {
    console.log(`${v} 입니다.`);
});