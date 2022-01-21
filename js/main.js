let buttonShow = document.querySelector('.btn-open');
let modal = document.querySelector('.modal');
let buttonClose = document.querySelector('.btn-close');

buttonShow.addEventListener("click", function () {
  modal.classList.remove('modal-none');
});

buttonClose.addEventListener("click", function () {
  modal.classList.add('modal-none');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal')) {
      evt.preventDefault();
      modal.classList.add('modal-none');
    }
  }
});