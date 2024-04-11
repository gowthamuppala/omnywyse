// Get references to the necessary elements
const datePicker = document.getElementById('datePicker');
const monthDisplay = document.getElementById('monthDisplay');
const yearDisplay = document.getElementById('yearDisplay');
const calendarGrid = document.querySelector('.calendar');
const timeSlots = document.querySelectorAll('.time-slot');

// Function to render the calendar grid
function renderCalendar() {
    const date = new Date(datePicker.value);
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update month and year display
    monthDisplay.textContent = date.toLocaleString('default', { month: 'long' });
    yearDisplay.textContent = year;

    // Clear the previous calendar grid
    calendarGrid.innerHTML = '';

    // Render the calendar grid
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;

        // Highlight the current date
        if (day === date.getDate()) {
            dayElement.classList.add('current-date');
        }

        calendarGrid.appendChild(dayElement);
    }
}

// Event listener for date changes
datePicker.addEventListener('change', renderCalendar);

// Event listener for time slot selection
timeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        // Handle time slot selection logic here
        const selectedTime = slot.textContent;
        console.log('Selected time: ${selectedTime}');
    });
});

// Initial rendering of the calendar
renderCalendar();

// Select all buttons with the class "myButton"
var myButtons = document.querySelectorAll(".time-slot");

// Initialize a variable to keep track of the currently selected button
var selectedButton = null;

// Add click event listeners to each button
myButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        // Deselect the previously selected button (if any)
        if (selectedButton !== null) {
            selectedButton.classList.remove("selected");
            
        }

        // Set the clicked button as the selected button
        selectedButton = button;
    

        // Change the color of the clicked button
        selectedButton.classList.add("selected");
    });
});
  

document.getElementById("confirm-btn").addEventListener("click", function() {
    var selectedOption = document.getElementById("options").value;
    // var modalMessage = "You selected: " + selectedOption;
    // var msg="<br> Your booking is confirmed!! "
    var modalMessage = "Your booking is confirmed. You selected: " + selectedOption;
    displayModal(modalMessage);
  });
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // Function to display the modal with message
  function displayModal(message) {
    var modalMessage = document.getElementById("modalMessage");
    modalMessage.textContent = message;
    modal.style.display = "block";
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  