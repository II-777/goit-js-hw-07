function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

const handleClick = (event) => {
  const color = getRandomHexColor();
  const body = document.body;
  const spanElement = document.querySelector('.color');
  spanElement.textContent = color;
  body.style.backgroundColor = color;
};

button.addEventListener('click', handleClick);
