let modalContainer = document.querySelectorAll(".modal-container")[0];
let openModal;
let closeModal = document.querySelectorAll(".close-modal")[0];

function letsToggleModal() {
  modalContainer.classList.toggle("modal-close");
}

closeModal.addEventListener("click", letsToggleModal);
