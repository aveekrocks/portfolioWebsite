document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.addEventListener("click", () => {
      alert("You're about to contact Aveek Sharma ✉️");
    });
  }
});
