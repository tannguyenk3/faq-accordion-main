document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      const iconPlus = item.querySelector(".icon-plus");
      const iconMinus = item.querySelector(".icon-minus");
      const answer = item.querySelector(".text");
  
      // Initially hide the minus icon and the answer
      iconMinus.style.display = "none";
  
      question.addEventListener("click", () => {
        const isAnswerVisible = answer.classList.contains("show");

        if (isAnswerVisible) {
          answer.classList.remove("show");
          iconPlus.style.display = "block";
          iconMinus.style.display = "none";
        } else {
          answer.classList.add("show");
          iconPlus.style.display = "none";
          iconMinus.style.display = "block";
        }
      });
    });
});

