const incrementbtn = document.querySelector('#increment');
const decrementbtn = document.querySelector('#decrement');
const resetbtn = document.querySelector('#reset');
const display = document.getElementById('display');

incrementbtn.addEventListener('click', () => {
  score++;
  display.textContent = `Score: ${score}`;
});

decrementbtn.addEventListener('click', () => {
  score--;
  display.textContent = `Score: ${score}`;
});

resetbtn.addEventListener('click', () => {
  score = 0;
  display.textContent = `Score: ${score}`;
});
