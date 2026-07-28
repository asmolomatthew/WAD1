const incrementbtn = document.querySelector('#increment');
const display = document.getElementById('display');

incrementbtn.addEventListener('click', () => {
  score++;
  display.textContent = `Score: ${score}`;
});
