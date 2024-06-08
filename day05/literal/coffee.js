const coffeeMenu = [
  { name: 'americano', price: 2500, isRemained: false },
  { name: 'latte', price: 3500, isRemained: false },
  { name: 'vanilla latte', price: 3000, isRemained: true },
];

const stockTag = (isRemained) => {
  const className = isRemained ? 'blue' : 'red';
  const text = isRemained ? '있음' : '없음';
  return `<span class=${className}>${text}</span>`;
};

const priceTag = (price) => {
  const discountPrice = price >= 3000 ? price * 0.8 : price;
  return `<h5>${discountPrice}</h5>`;
};

const nameTag = (name) => {
  const capitalizeName = name[0].toUpperCase() + name.slice(1, name.length);
  return `<h3>${capitalizeName}</h3>`;
};

const coffeeTag = (v) => {
  return `
  <div class="coffee">
    ${nameTag(v.name)}
    ${priceTag(v.price)}
    ${stockTag(v.isRemained)} 
  </div>
  `;
};

coffeeMenu.forEach((v) =>
  document.querySelector('.menu').insertAdjacentHTML('beforeend', coffeeTag(v))
);
