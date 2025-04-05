/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 5
*/

$(function() {
    populateDropdown();
    getOrders('Jan'); 

    // Handle months
    $('#monthDropdownSelect').change(function() {
        const month = $(this).val();
        getOrders(month);
    });

    // Get orders from server
    function getOrders(month) {
        $.post('/orders', { month: month })
            .done(function(data) {
                $('#orderList').empty();
                data.forEach(order => {
                    $('#orderList').append(`<li>${order.quantity} ${order.topping}</li>`);
                });
            })
            .fail(function(err) {
                alert(err.responseJSON?.error || 'Failed to fetch orders.');
            });
    }

    // Convert T_ID to topping name
    function convertToppingId(id) {
        if (id === 1) return 'Plain';
        if (id === 2) return 'Cherry';
        if (id === 3) return 'Chocolate';
        return 'Unknown';
    }

    // Populate dropdown with numbers 1-100
    function populateDropdown() {
        const dropdown = $('#num');
        for (let i = 1; i <= 100; i++) {
            dropdown.append(new Option(i, i));
        }
    }

    // Handle order button click
    $('#orderButton').click(function () {
        const quantity = $('#num').val();
        const topping = $('input[name="topping"]:checked').val();
        const notes = $('textarea[name="notes"]').val();

        if (notes.toLowerCase().includes('vegan')) {
            alert('Warning: Cheesecakes contain dairy!');
            return;
        }

        // Convert topping to ID
        let toppingId;
        if (topping === 'plain') toppingId = 1;
        else if (topping === 'cherry') toppingId = 2;
        else if (topping === 'chocolate') toppingId = 3;

        // Dynamically get current month and year
        const date = new Date();
        const month = date.getMonth() + 1; // JS months are 0-based
        const year = date.getFullYear();

        // Send data to backend
        $.post('/newOrder', {
            toppingId: toppingId,
            quantity: quantity,
            notes: notes,
            month: month,
            year: year
        })
            .done(function () {
                $('#orderForm').hide();
                $('#orderMessage').html(
                    `Thank you! Your order has been placed.<br>Quantity: ${quantity}<br>Topping: ${topping}<br>Notes: ${notes}`
                );
            })
            .fail(function () {
                alert('There was an error placing your order. Please try again.');
            });
    });
});