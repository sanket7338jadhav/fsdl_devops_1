const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    // Toggle current item
    item.classList.toggle("active");
  });
});



