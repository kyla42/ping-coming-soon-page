const submitField = document.querySelector(".submit-field");
const submitBtn = document.querySelector(".submit-btn");
const email = document.getElementById("email");

submitBtn.addEventListener("click", function () {
    if (email.value.includes("@") && email.value.includes(".")) {
        submitField.classList.remove("error");
        submitField.classList.add("success")
        submitBtn.disabled = true;
        email.disabled = true;
        email.value = null;
    }
    else {
        submitField.classList.add("error");
    }
})