const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

<script>
  const collapseElem = document.querySelector('#target');
  const collapse = new bootstrap.Collapse(collapseElem, {toggle: false});
  document.querySelector('#btn-target').addEventListener('click', (e) => {
    e.preventDefault();
    // сворачиваем или разворачиваем collapse-элемент
    collapse.toggle();
  });
</script>
