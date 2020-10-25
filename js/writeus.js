const writeUs = document.querySelector(".send-us-button");
const writePopup = document.querySelector(".modal-send-us");
const writeClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".send-us-form");
const writeName = writePopup.querySelector(".contact-name");
const writeEmail = writePopup.querySelector(".contact-email");
const writeText = writePopup.querySelector(".contact-text");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");
  if (storage) {
    writeName.value = storage;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
  writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeEmail.value || !writeText.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal-error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writeName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal-show");
      writePopup.classList.remove("modal-error");
    }
  }
});
