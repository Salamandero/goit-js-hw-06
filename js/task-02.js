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
  li.className = 'item';
  // li.classList.add("item");
  
  ingredientsEl.append(li);
});

