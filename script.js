const dobInput = document.querySelector("#date-of-birth");
const currentDateInput = document.querySelector("#current-date");
let currentAge = document.querySelector("#current-age");
let calculate = document.querySelector("#btn-calculate");

calculate.addEventListener("click", function() {
    if(!dobInput.value || !currentDateInput.value){
        alert("Please fill in the Date of Birth & Current Date");
        return;
    }

    const dob = new Date(dobInput.value);
    const currentDate = new Date(currentDateInput.value);

    let age = currentDate.getFullYear() - dob.getFullYear();

    currentAge.textContent = `You are ${age} years old.`;
});