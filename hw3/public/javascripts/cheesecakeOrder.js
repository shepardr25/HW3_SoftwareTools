/*
Author: Ruth Shepard
Class: Software Engineering
Assignment: HW 4
*/

$(function() {
    populateDropdown();
    getOrders('Jan'); 

    $('#monthDropdownSelect').change(function() {
        const month = $(this).val();
        getOrders(month);
    });

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

    function populateDropdown() {
        const dropdown = $('#num');
        for (let i = 1; i <= 100; i++) {
            dropdown.append(new Option(i, i));
        }
    }

    $('#orderButton').click(function() {
        const quantity = $('#num').val();
        const topping = $('input[name="topping"]:checked').val();
        const notes = $('textarea[name="notes"]').val();

        if (notes.toLowerCase().includes('vegan')) {
            alert('Warning: Cheesecakes contain dairy!');
        } else {
            $('#orderForm').hide();
            $('#orderMessage').html(
                `Thank you! Your order has been placed.<br>Quantity: ${quantity}<br>Topping: ${topping}<br>Notes: ${notes}`
            );
        }
    });
});