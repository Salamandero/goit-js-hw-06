const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
// console.log('ingredients:', ingredientsEl);


const elem = ingredients.map((el) => {
  const li = document.createElement('li');
  li.textContent = `${el}`;
  li.classList.add("item");
  //  li.className = 'item';
    return li;
  });
ingredientsEl.append(...elem);
