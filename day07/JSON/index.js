const getData = fetch('https://fakerapi.it/api/v1/credit_cards?_quantity=100');
getData
  .then((v) => v.json())
  .then((v) => v.data)
  .then((v) =>
    v.forEach(({ type, number, expiration, owner }) =>
      bindData(type, number, expiration, owner)
    )
  )
  .catch((v) => alert('서버터짐 ㅅㄱ'));

const bindData = (type, number, expiration, owner) => {
  const table = document.querySelector('.table');
  const maskedNumber = '****' + [...number].slice(4, number.length).join('');
  const date = new Date();
  const newExp = date.getFullYear() + '/' + expiration;

  table.insertAdjacentHTML(
    'beforeend',
    `
    <div class="table_data">
        <div class="type">${type}</div>
        <div class="maskedNumber">${maskedNumber}</div>
        <div class="newExp">${newExp}</div>
        <div class="owner">${owner}</div>
    </div>
    `
  );
};
