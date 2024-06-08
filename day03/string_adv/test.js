const fruits = ['apple', 'banana', 'orange', 'melon', 'kiwi'];

fruits.forEach((v) => {
  //   if (v.includes('a')) console.log(v, 'a를 포함 true');
  //   else console.log(v, 'a를 포함 false');
  console.log(`${v} a를 ${v.includes('a') ? '포함' : '미포함'}`);
});

// 6글자 이상이면 대문자화하고, 아니면 해당단어를 두번반복한 단어로 표시
// ex) BANANA, appleapple

fruits.forEach((v) => {
  console.log(`${v.length >= 6 ? v.toUpperCase() : v + v}`);
  // v + v 는 v.repeat(2); 와 같다.
});

/*
fruits.forEach((v) => {
  const isSixOver = v.length >= 6;
  const result = isSixOver ? v.toUpperCase() : v + v ;
  console.log(result);
});
*/

fruits.forEach((v) => {
  console.log(v.toUpperCase().repeat(v.length));
});
