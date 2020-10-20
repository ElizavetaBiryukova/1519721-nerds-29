const writeUs = document.querySelector(".send-us-button");
const writePopup = document.querySelector(".modal-send-us");
const writeClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".send-us-form");
const writeName = writePopup.querySelector(".send-us-name");
const writeMail = writePopup.querySelector(".send-us-email");
const writeText = writePopup.querySelector(".send-us-text");

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
    writeMail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal-show");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeName.value || !writeMail.value || !writeText.value) {
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
    }
  }
});
