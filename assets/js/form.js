document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('blogEntry').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Log to ensure event listener is working
        console.log('Form submitted');

        // Collect form data
        const currentEntry = {
            'username': document.getElementById("username").value,
            'title': document.getElementById("title").value,
            'content': document.getElementById("content").value
        };

        // Retrieve the existing data from localStorage
        let contentArray = JSON.parse(localStorage.getItem('contentArray')) || [];

        // Log to check the currentEntry object
        console.log('Current Entry:', currentEntry);

        // Push the new form data to the array
        contentArray.push(currentEntry);

        // Save the updated array back to localStorage
        localStorage.setItem('contentArray', JSON.stringify(contentArray));

        // Log to confirm data is saved
        console.log('Data saved to localStorage:', contentArray);

        // Clear the form
        document.getElementById('blogEntry').reset();

        // Navigate to the new page
        window.location.href = './blog.html';
    });
});
