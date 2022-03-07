const personName = document.querySelector("#person-name");

const generateRandomColor = () => {
  const maxValue = 0xffffff;
  let randomNumber = Math.random() * maxValue;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  const randomColor = randomNumber.padStart(6, 0);
  return randomColor;
};

const changeHeaderColor = () => {
  document.documentElement.style.setProperty(
    "--mainColor",
    `#${generateRandomColor()}`
  );
};
