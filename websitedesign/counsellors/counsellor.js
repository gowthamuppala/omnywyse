document.getElementById("vp1").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile1.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});

document.getElementById("vp2").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile2.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});

document.getElementById("vp3").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile3.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});

document.getElementById("vp4").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile4.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});
document.getElementById("vp5").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile5.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});
document.getElementById("vp6").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "../viewprofile/viewprofile6.html";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});

// navigation bar

var loginElements = document.getElementsByClassName("login");

// Iterate over the collection and attach event listener to each element
for (var i = 0; i < loginElements.length; i++) {
    loginElements[i].addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of following the link

        // Define the URL of the login page
        var url = "../home/login.html";

        // Redirect to the login page
        window.location.href = url;
    });
}


// slot booking

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


// to open test

document.getElementById("test").addEventListener("click", function() {
    // URL of the page you want to open
    var url = "https://uppala-sai-gowtham.involve.me/whats-your-emotional-intelligence-b51c";
    
    // Open the new page in a new tab/window
    window.location.href=url;
});