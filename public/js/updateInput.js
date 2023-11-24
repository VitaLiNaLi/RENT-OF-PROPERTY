const rangeInput = document.querySelector('#rangeInput');
const textInput = document.querySelector('#textInput');
// function updateValue1() {
//   // обновление значения rangeInput на основе значения textInput
//   rangeInput.value = textInput.value;
// }

// function updateValue2() {
//   // обновление значения textInput на основе значения rangeInput
//   textInput.value = rangeInput.value;
// }

if (rangeInput) {
  rangeInput.addEventListener('change', (event) => {
    textInput.value = event.target.value;
  });

  textInput.addEventListener('change', (event) => {
    rangeInput.value = event.target.value;
  });
}
