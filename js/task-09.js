function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Ref = {
  changeCol: document.querySelector('.change-color'),
color: document.querySelector('.color'),
body: document.querySelector('body'),
}


const changeBtnColor = () => {
  Ref.body.style.background = getRandomHexColor();
  Ref.color.textContent = getRandomHexColor();
}
Ref.changeCol.addEventListener('click', changeBtnColor);
