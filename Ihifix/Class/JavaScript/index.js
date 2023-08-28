// Data Types:

// Function Declaration
function Sum() {
  // result = 2 + 2;
  //   return result;
}
Sum();

// Function Expression
const multiply = function () {
  return 2 * 3;
};

const handleChange = (a, b) => {
  return a + b;
};

const result = handleChange(5, 2);
console.log(result);

// Arrow Functions

const nameInput = document.getElementById('textField');
const text = document.querySelector('h1');
const errorMessage = document.querySelector('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (nameInput.value === '') {
    errorMessage.innerText = 'Please enter a name';
    errorMessage.classList.add('error');
  } else if (nameInput.value.trim().length < 3) {
    errorMessage.innerText = 'Name must be at least 3 characters';
    errorMessage.classList.add('error');
  }
  // text.innerText = nameInput.value;
});

nameInput.addEventListener('input', (val) => {
  console.log(val.target.value);
});
