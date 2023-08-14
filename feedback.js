document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission here

    // Get form values here
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    //Form validation
    
    setTimeout(function() {
        document.getElementById('feedbackForm').reset();
        document.getElementById('successMessage').classList.remove('hidden');
    }, 1000); 

    
});