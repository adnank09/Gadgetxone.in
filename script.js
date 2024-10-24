// Get modal elements
var modal = document.getElementById("customerFormModal");
var buyNowBtn = document.getElementById("buyNowBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Open the modal when Buy Now is clicked
buyNowBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission handling
var form = document.getElementById("customerForm");
form.onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show popup message
    alert("Thank you for showing your interest, we will get back to you soon");

    // Here you would handle form data (e.g., send it to a server)
    
    // Close the modal
    modal.style.display = "none";
};
