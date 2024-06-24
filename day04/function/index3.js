const a = () => {
    console.log("아침");
};
const b = () => {
    console.log("점심");
};
const c = () => {
    console.log("저녁");
};

// 아침 -> 점심 -> 저녁
// 점심 -> 저녁 -> 아침
// 저녁 -> 아침 -> 점심

const morning = document.querySelector(".morning");
morning.addEventListener("click", () => {
    a();
    b();
    c();
});
const lunch = document.querySelector(".lunch");
lunch.addEventListener("click", () => {
    b();
    c();
    a();
});
const dinner = document.querySelector(".dinner");
dinner.addEventListener("click", () => {
    c();
    a();
    b();
});

const arr = [1,2,3,4,5];

arr.some((v) => {
    const a = v + 10;
    return a >= 5;
});
arr.every((v) => v % 2 == 0);