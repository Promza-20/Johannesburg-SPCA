/* =========================================
   JOHANNESBURG SPCA WEBSITE JAVASCRIPT
   ========================================= */

// Wait until the webpage has finished loading
document.addEventListener("DOMContentLoaded", function () {

    // Find the enquiry form on the page
    const enquiryForm = document.querySelector("form");

    // Check whether an enquiry form exists
    if (enquiryForm) {

        // Run this code when the visitor submits the form
        enquiryForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();

            // Display a confirmation message
            alert("Thank you for your enquiry. The Johannesburg SPCA will respond as soon as possible.");

        });
    }
});