//Method 1 - using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  //   console.log(question);
  const btn = question.querySelector(".question-btn");
  //   console.log(btn);
  btn.addEventListener("click", function () {
    //close all questions opened after opening a new one
    questions.forEach(function (item) {
      //   console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
// METHOD 2 -Traversing the DOM
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement);
//     const quiz = e.currentTarget.parentElement.parentElement; //traversing through the DOM
//     quiz.classList.toggle("show-text");
//   });
// });
