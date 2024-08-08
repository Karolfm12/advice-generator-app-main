const insertAdvice = document.querySelector(".advice");
const insertID = document.querySelector(".id-advice");
const btn = document.querySelector("button");
const container = document.querySelector(".container");

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      const idAdvice = res.slip.id;
      const advice = res.slip.advice;
      insertAdvice.innerText = advice;
      insertID.innerText = idAdvice;
    })
    .catch((err) => console.log(err));
};
window.addEventListener("load", () => {
  fetchAdvice();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAdvice();
});
