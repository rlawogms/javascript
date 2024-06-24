//Array
const arr = [1,2,3,4,5];
const fruits = ["apple","banana","orange"];
const double_arr = [
    ["아메리카노", "헤이즐넛아아"],
    ["딸기스무디","초코스무디"]
];
arr.forEach((v) => {
    console.log(v);
});
arr.some((v) => {
    return v < 5;
});
arr.every((v) => {
    return v < 5;
});

"hello".includes("h");
"world".repeat(5);

//if else if else - switch
const newDiv = document.createElement("div");
newDiv.appendChild();
newDiv.classList.toggle("red");

