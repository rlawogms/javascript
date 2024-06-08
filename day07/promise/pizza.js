//1.도우준비 0.5
const prepareDough = () => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log('도우 준비 완료');
      success('🍞');
    }, 500);
  });
};
//2.토마토 소스 뿌리기 1
const addSauce = (dough) => {
  return new Promise((success) => {
    setTimeout((v) => {
      console.log('토마토 소스 뿌리기');
      success(`${dough} + 🍅`);
    }, 1000);
  });
};
//3.토핑 추가하기 1
const addTopping = (doughWithSauce) => {
  return new Promise((success) => {
    setTimeout((v) => {
      console.log('토핑 올리기');
      success(`${doughWithSauce} + 🧀`);
    }, 1000);
  });
};
//4.피자굽기 0.5
const bakePizza = (doughWithSauceAndTopping) => {
  return new Promise((success) => {
    setTimeout(() => {
      console.log('피자 굽기 완료');
      success(`${doughWithSauceAndTopping} + 🍕`);
    }, 500);
  });
};
//5.피자 쿰척

prepareDough()
  .then((v) => addSauce(v))
  .then((v) => addTopping(v))
  .then((v) => bakePizza(v))
  .then((v) => console.log(`${v} + 피자 먹기`));
