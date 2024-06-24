//함수 : input[str, bool, element, null] -> output[str, bool, element, null]
//일반 함수
function hello(x) {
    return `${x} 안녕!`;
}

// hello()

const a = hello('여누') // 여누 안녕!
const b = hello('JS') // JS 안녕!
// console.log(a);
// console.log(b);

//1. x를 넣으면 +100 돌려주는 함수
function plus100(x) {
    return x + 100;
}
//2. x를 넣으면 대문자화 시키고 + '😊' 돌려주는 함수
function upper(x) {
    return x.toUpperCase() + '😊';
}

//3. 배열 x를 넣으면 두번쨰 원소를 돌려주는 함수
function second(x) {
    return x[1];
}

//4. x를 넣으면 + 럭키비키잔앙을 붙혀서 돌려주는 함수
function luckyVicky(x) {
    return x + '럭키비키잖앙~';
}

const e = second(["apple", "banana"]);
const f = luckyVicky("오늘 일요일 수업인데 ");


const c = plus100(300); //400
const d = upper("apple"); //APPLE😊

console.log(c,d,e,f);