console.log('JavaScript is connected')

///let attempts = 1;
///attempts = attempts + 1;

///console.log(attempts);

///const courseName = "Web Development";
///const passingScore = 75;
///passingScore = 80;

///console.log(passingScore);

///const name = 'Matthew Asmolo';
///const age = 28;
///const isPassed = true;
///let result;
///const selectiveItem = null;

///const score = 82;
///if (score >= 90) {
///console.log("Excellent");
///} else if (score >= 75) {
///console.log("Passed"); // This runs!
///} else {
///console.log("Needs improvement");
///}

///function greetName(name) {
   /// console.log(`Hello ${name}`);
///}

///greetName('Matthew');

/* Standard 'for' loop example */
///for (let number = 1; number <= 5; number++) {
  ///console.log(number);
///}

/* Loop through an array */
///const topics = ["Git", "Variables", "Functions"];
///for (const topic of topics) {
  ///console.log(topic);
///}

let score = 0;

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