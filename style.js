const scriptURL = "https://script.google.com/macros/s/AKfycbyNIhr5jshO1N0Twz9v8wwVq3qA2rjWAL7gLgBvszHLbGTjkotxSwiqK40fpmMRZe89/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // When the "submit" button is clicked
  // Show button "Loading", hide button "Submit"
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Show button "Submit", hide button "Loading"
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // Show Alert
      myAlert.classList.toggle("d-none");
      // Reset Form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
