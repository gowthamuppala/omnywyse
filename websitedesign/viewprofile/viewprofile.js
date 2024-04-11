var bookingElements = document.getElementsByClassName("booking");

for (var i = 0; i <bookingElements .length; i++) {
    bookingElements[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of following the link

        // Define the URL of the login page
        var url = "../sessionbooking/booking.html";

        // Redirect to the login page
        window.location.href = url;
    });
}