const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elem = ingredients.map((el) => {
 const li = document.createElement('li');
  li.textContent = `${el}`;
  #ingredients.append(li);
})

