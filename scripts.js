const form = document.getElementById('calculator_form');
const inputs = document.querySelectorAll('.float-input');
const totalOutput = document.getElementById('running_total');
const targetFloatInput = document.getElementById('target_float');

// Update the total whenever an input changes
function updateTotal() {
    let sum = 0;
    let rawSubtotal = 0;
    let subtotal = 0;
    let difference = 0;
    let symbol = '';
    let input_id = '';
    let subtotal_id = '';

    inputs.forEach(input => {
        //Get the id of the input label
        input_id = input.id;
        subtotal_id = input_id.replace("input_", "subtotal_");

        const denom = parseFloat(input.dataset.value) * 100;

        //Parse as a whole number (base 10) and default to 0 if the input is empty or invalid
        const rawCount = parseInt(input.value, 10) || 0;

        //Force negative numbers to 0
        const count = Math.max(0, rawCount);

        //Divide the raw subtotal by 100 to get the actual subtotal
        rawSubtotal = count * denom;
        subtotal = rawSubtotal / 100;

        //Add to running total
        sum += subtotal;

        //Get the actual subtotal element using the subtotal id created
        const subtotal_element = document.getElementById(subtotal_id);
        subtotal_element.textContent = `$${subtotal.toFixed(2)}`;
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