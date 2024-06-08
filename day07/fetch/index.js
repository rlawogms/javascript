// fetch
// url을 넣으면 데이터를 돌려주는 함수

// const text = new Promise((s) => s('프랭키 버거'));
// text.then((v) => console.log(typeof v));

//response type
const getData = fetch('https://fakerapi.it/api/v1/addresses?_quantity=10');
getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ id, street, streetName, buildingNumber, country }) => 
      bindData(id, street, streetName, buildingNumber, country)
    )
  )
  .catch((v) => console.log("너무 많이 보내지마세요"))

const bindData = (id, street, streetName, buildingNumber, country) => {
  const table = document.querySelector('.table');
  table.insertAdjacentHTML(
    'beforeend',
    `
    <div class="table_data">
        <div class="id">${id}</div>
        <div class="street">${street}</div>
        <div class="streetName">${streetName}</div>
        <div class="buildingNumber">${buildingNumber}</div>
        <div class="country">${country}</div>
      </div>
    `
  );
};
