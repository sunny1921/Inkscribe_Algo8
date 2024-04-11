const closeAlert = document.querySelector(".close-alert");
const alert = document.querySelector(".alert");

// closeAlert.addEventListener("click", () => (alert.style.display = "none"));
document.getElementById('loginBtn').addEventListener('click', function() {
    // Redirect to login page or show login modal
    window.location.href = '/login.html'; // Change to your login page URL
});

document.getElementById('signupBtn').addEventListener('click', function() {
    // Redirect to signup page or show signup modal
    window.location.href = '/signup.html'; // Change to your signup page URL
});