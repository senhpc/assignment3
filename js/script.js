"use strict";

// ---- CHECK EMAIL ---- //

const btnCheckEmail = document.querySelector(".btn-check-email");
const infoContent = document.querySelector(".info-content-wrapper");
const emailForm = document.querySelector("#email-form");
const emailHelp = document.querySelector("#emailHelp");
const inputEmail = document.querySelector("#input-email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// add listener to btnCheckEmail
btnCheckEmail.addEventListener("click", checkEmail);

function checkEmail() {
  // check if the element exist
  if (!inputEmail) return;

  // if value is empty, or not match email regex then show error
  if (regex.test(inputEmail.value)) {
    emailForm.classList.add("collapse-content");
    infoContent.classList.remove("collapse-content");
  } else {
    inputEmail.classList.add("is-invalid");
  }
}

// remove error status when user input
inputEmail.addEventListener("input", () => {
  inputEmail.classList.remove("is-invalid");
});

// press enter to check mail
inputEmail.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    checkEmail();
  }
});

// ---- BUTTON VIEW MORE ---- //

// Ủy quyền sự kiện Event Delegation
const resume = document.querySelector("#resume");
resume.addEventListener("click", (e) => {
  // tìm nút view-more vừa click
  const btn = e.target.closest(".btn-view-more");
  if (!btn) return;
  // tìm class details-item chứa btn
  const detailsItem = btn.closest(".details-item");
  // tìm wrapper trong details-item và toggle class collapse-content
  const contentWrapper = detailsItem.querySelector(".details-item-wrapper");
  contentWrapper.classList.toggle("collapse-content");
  btn.classList.toggle("is-collapsed");
});
