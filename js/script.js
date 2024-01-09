const emails = document.querySelectorAll("input.email");
const btnForm = document.querySelectorAll(".btn-form");

btnForm.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    const emailToValidate = emails[index].value;

    if (!validateEmail(emailToValidate)) {
      e.currentTarget.previousElementSibling.classList.add("error");
    } else {
      e.currentTarget.previousElementSibling.classList.remove("error");
    }
  });
});
