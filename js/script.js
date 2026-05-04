// ---- CHECK EMAIL ---- //

const btnCheckEmail = document.querySelector(".btn-check-email");
const infoContent = document.querySelector(".info-content");
const emailForm = document.querySelector("#email-form");
const emailHelp = document.querySelector("#emailHelp");
const inputEmail = document.querySelector("#InputEmail");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// add listener to btnCheckEmail
btnCheckEmail.addEventListener("click", checkEmail);

function checkEmail() {
  // check if the element exist
  if (!inputEmail || !emailHelp) return;

  // if value is empty, or not match email regex then show error
  if (!inputEmail.value) {
    showError("Email không được để trống!!!");
  } else if (regex.test(inputEmail.value)) {
    emailForm.classList.add("hiding");
    infoContent.classList.remove("hiding");
  } else {
    showError(`Email chưa đúng định dạng!`);
  }
}

function showError(message) {
  emailHelp.textContent = message;
  emailHelp.classList.add("error");

  setTimeout(() => {
    emailHelp.textContent = "Hãy nhập email để xác thực!";
    emailHelp.classList.remove("error");
  }, 2000);
}

// ---- BUTTON VIEW MORE ---- //

// select all btn view more, change the inner html
const viewMoreBtns = document.querySelectorAll(".btn-view-more");

viewMoreBtns.forEach((btn) => {
  if (btn) {
    btn.innerHTML = `<div class="text-slide"><span>View More</span><span>View Less</span></div>`;
  }
});
