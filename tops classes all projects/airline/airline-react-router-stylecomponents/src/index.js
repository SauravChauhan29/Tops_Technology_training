
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.data-inputing');
    const submitbutton = form.querySelector('button');
    const tripType = document.querySelector('input[name="trip"]:checked');
console.log(tripType)

    submitbutton.addEventListener('click', function(event) {
        event.preventDefault() 
        validForm();
    });

    function validForm() {
        const leavingFrom = document.getElementById('leaving-from').value.trim();
        const goingTo = document.getElementById('going-to').value.trim();
        const departureDate = document.getElementById('departure-date').value.trim();
        const returnDate = document.getElementById('return-date').value.trim();
        const passengers = document.getElementById('passengers').value.trim();
        const tripType = document.querySelector('input[name="trip"]:checked');



        let submitvalidaton = true;
        let errorMessage = '';

        if (leavingFrom === '') {
            submitvalidaton = false;
            errorMessage += 'Leaving From field is required.\n';
        }

        if (goingTo === '') {
            submitvalidaton = false;
            errorMessage += 'Going To field is required.\n';
        }

        if (departureDate === '') {
            submitvalidaton = false;
            errorMessage += 'Departure Date & Time is required.\n';
        }

        if (returnDate === '') {
            submitvalidaton = false;
            errorMessage += 'Return Date & Time is required.\n';
        }

        if (passengers === '' || passengers <= 0) {
            submitvalidaton = false;
            errorMessage += 'Passenger(s) field must be a positive number.\n';
        }

        if (submitvalidaton) {
            alert('Form is valid!');
            
        } else {
            alert('Please correct the following errors:\n' + errorMessage);
        }
    }
});


