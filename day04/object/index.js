// array, element, obj

// const book = {
//     title:"자바스크립트는 누가 만들었냐",
//     price: 24000,
//     author: ["전수효", "엄준식", "김민서"],
//     publishedYear: {
//         year: 2024,
//         month: 5,
//         day: 31,
//     },
// };

const book = { 
    smallButtons: ["소득공제"],
    title: "자바스크립트는 왜 그 모양인가?",
    subTitle: 
        "더글라스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
    author: {    
        real: "더글라스 크락포드",
        editor: "박수현",
    },
    publishedCompany: "인사이트(insight)",
    publishedDate: {
        year: 2020,
        month: 5,
        day: 25,
    },
    rate: 6,
    reviews: 1,
    saleIndex: 288,
};

// 데이터 가져오기
// 1. dot 연산자
console.log(book.title);
console.log(book.author.editor);

// 2. bracket 연산자
console.log(book["title"]);
console.log(book["author"]["editor"]);

// 데이터 추가
book.isBestSeller = true;

// 데이터 삭제
delete book.subTitle;

// 데이터 존재 유무
"title" in book; // true


book.keys() // keys값들만 돌려주기
book.values() // values값들만 돌려주기