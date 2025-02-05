/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 3
*/

// Function to populate the dropdown with options from 1 to 100
function populateDropdown() {
    const dropdown = document.getElementById("num");  // Get the dropdown element
    for (let i = 1; i <= 100; i++) {  // Loop from 1 to 100
        const option = document.createElement("option");  // Create new option
        option.value = i;  // Set the value of the option
        option.textContent = i;  // Set the text displayed in the dropdown
        dropdown.appendChild(option);  // Append the option to the dropdown
    }
}  

// Order data for each month (can be updated)
const orderData = {
    Jan: ['11 cherry', '17 chocolate', '31 plain'],
    Feb: ['5 cherry', '9 chocolate', '200 plain'],
    Mar: ['44 cherry', '67 chocolate', '100 plain'],
    Apr: ['13 cherry', '20 chocolate', '75 plain'],
    May: ['10 cherry', '45 chocolate', '15 plain'],
    Jun: ['33 cherry', '88 chocolate', '42 plain'],
    Jul: ['25 cherry', '56 chocolate', '37 plain'],
    Aug: ['18 cherry', '29 chocolate', '51 plain'],
    Sep: ['12 cherry', '23 chocolate', '67 plain'],
    Oct: ['34 cherry', '53 chocolate', '92 plain'],
    Nov: ['19 cherry', '34 chocolate', '56 plain'],
    Dec: ['7 cherry', '14 chocolate', '39 plain']
};

// Function to update the order list based on the selected month
function updateOrderList(month) {
    const orders = orderData[month];  // Get orders for the selected month
    let htmlContent = '';  // Initialize empty content
    orders.forEach(order => {
        htmlContent += `<li>${order}</li>`;  // Add each order as a list item
    });
    $('#orderList').html(htmlContent);  // Update the order list in HTML
}

$(document).ready(function() {
    // Populate the dropdown with numbers from 1 to 100 when the page loads
    populateDropdown();

    // Initially load data for January
    updateOrderList('Jan');

    // Event listener for month dropdown change
    $('#monthDropdownSelect').change(function() {
        const selectedMonth = $(this).val();
        updateOrderList(selectedMonth);  // Update the order list based on selected month
    });

    // Handle order submission
    $('#orderButton').click(function() {
        // Get the values from the form elements
        var quantity = $('#num').val();
        var topping = $("input[name='topping']:checked").val();
        var notes = $("textarea[name='notes']").val();

        // Check if the notes contain the word 'vegan'
        if (notes.toLowerCase().includes('vegan')) {
            alert('Warning: Cheesecakes contain dairy!');
        } else {
            // Hide the form and show the confirmation message
            $('#orderForm').hide();
            $('#orderMessage').html(
                `Thank you! Your order has been placed. <br> Quantity: ${quantity} <br> Topping: ${topping} <br> Notes: ${notes}`
            );
        }
    });
});
