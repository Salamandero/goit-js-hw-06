//      1.1
const amountCategoriesElem = document.querySelectorAll('.item');
console.log('Number of categories:', amountCategoriesElem.length);

//      1.2

amountCategoriesElem.forEach(function (element) {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
  });