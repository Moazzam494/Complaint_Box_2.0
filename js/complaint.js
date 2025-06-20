
// js/complaint.js
document.getElementById("complaintForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successAlert").classList.remove("hidden");
  e.target.reset();
});
