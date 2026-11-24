const form = document.getElementById('calculator_form');
const inputs = document.querySelectorAll('.float-input');
const totalOutput = document.getElementById('running_total');
const targetFloatInput = document.getElementById('target_float');

// Update the total whenever an input changes
function updateTotal() {
    let sum = 0;
    let difference = 0;
    let symbol = '';

    inputs.forEach(input => {
        const denom = parseFloat(input.dataset.value);

        //Parse as a whole number (base 10) and default to 0 if the input is empty or invalid
        const rawCount = parseInt(input.value, 10) || 0;

        //Force negative numbers to 0
        const count = Math.max(0, rawCount);

        sum += (count * denom);
    });
    
    const targetValue = parseInt(targetFloatInput.value, 10) || 0;
    difference = sum - targetValue;

    symbol = difference < 0 ? '-' : '+';

    totalOutput.textContent = `$${sum.toFixed(2)} (${symbol}${Math.abs(difference).toFixed(2)})`;
}

// Attach the updateTotal function to the input event of the form
form.addEventListener('input', updateTotal);
targetFloatInput.addEventListener('input', updateTotal);

// Prevent the form from submitting and refreshing the page
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Reset button functionality
const resetButton = document.getElementById('reset_button');

// Reset the form and update the total when the reset button is clicked
function resetForm() {
    inputs.forEach(input => {
        input.value = '';
    });
    
    targetFloatInput.value = '';
    updateTotal();
}

// Attach the resetForm function to the click event of the reset button
resetButton.addEventListener('click', resetForm);