"use strict";

const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal-1");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".card-one");
const btnOpenModal1 = document.querySelector(".card-two");
const btnCloseModal = document.querySelector(".closebtn");
const btnCloseModal1 = document.querySelector(".closebtn1");

// const btnCloseModal1 = document.querySelector(".closebtn1");

const close = function () {
  modal.classList.add("hidden");
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnOpenModal1.addEventListener("click", openModal1);
btnCloseModal.addEventListener("click", close);
btnCloseModal1.addEventListener("click", close);
overlay.addEventListener("click", close);

// document.querySelector(".card-one").addEventListener("click", openModal);
// document.querySelector(".card-two").addEventListener("click", openModal1);
// document.querySelector(".closebtn").addEventListener("click", closeModal);
// document.querySelector(".closebtn1").addEventListener("click", closeModal);
