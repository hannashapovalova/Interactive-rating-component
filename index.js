const mainContainer = document.getElementById("main-container");
const thankYouContainer = document.getElementById("thank-you-container");
const submitButton = document.getElementById("submit_button");
const actualRating = document.getElementById("rating");
const rateBtns = document.querySelectorAll(".rate-btn");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thankYouContainer.classList.remove("hidden");

});

rateBtns.forEach(rateBtn => {
    rateBtn.addEventListener("click", () => {
    const value = rateBtn.getAttribute("value");
    // console.log(value);
    actualRating.innerHTML = value;
    });
});


// rateBtns.forEach((rate) => {
//          rate.addEventListener("click", () => {
//             console.log(rate.innerHTML);
//             actualRating.innerHTML = rate.innerHTML
//         })
//     })

