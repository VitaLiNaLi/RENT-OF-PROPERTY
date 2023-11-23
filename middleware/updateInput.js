const rangeInput = document.getElementById('rangeInput');
const textInput = document.getElementById('textInput');

function updateValue1() {
  // обновление значения rangeInput на основе значения textInput
  rangeInput.value = textInput.value;
}

function updateValue2() {
  // обновление значения textInput на основе значения rangeInput
  textInput.value = rangeInput.value;
}

rangeInput.addEventListener('change', (event) => {
  textInput.value = event.target.value;
});

textInput.addEventListener('change', (event) => {
  rangeInput.value = event.target.value;
});
