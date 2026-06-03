
// ---------------------------------- modal -----------------------------------------

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
//const closeBtn = document.querySelector('.close');
const closeBtn = document.querySelector('.closex');

// Events
/*modalBtn.addEventListener('click', openModal);*/
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal(kep) {
  document.getElementById("nagyitas").src=kep;
  modal.style.display = 'flex';
  //console.log('modal');
}

// Open
function openModalStock() {
  modal.style.display = 'flex';
  //console.log('modal');
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

// ---------------------------------------------------------------------------