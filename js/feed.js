// Get references to both dropdowns
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');

// Select all complaint cards
const complaintCards = document.querySelectorAll('.complaint-card');

// Function to filter complaints based on dropdown values
function filterComplaints() {
  // Get selected values
  const selectedCategory = categoryFilter.value;
  const selectedStatus = statusFilter.value;

  // Loop through each card
  complaintCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardStatus = card.getAttribute('data-status');

    // Check: Should this card be shown?
    const matchCategory = (selectedCategory === "All" || cardCategory === selectedCategory);
    const matchStatus = (selectedStatus === "All" || cardStatus === selectedStatus);

    if (matchCategory && matchStatus) {
      card.style.display = "flex"; // Show card (flex is used in layout)
    } else {
      card.style.display = "none"; // Hide card
    }
  });
}

categoryFilter.addEventListener('change', filterComplaints);
statusFilter.addEventListener('change', filterComplaints);
