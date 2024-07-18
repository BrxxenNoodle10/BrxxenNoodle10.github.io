// Define the starting point. Use a specific date.
const startDate = new Date('2008-10-20'); // Replace with your start date

function calculateElapsedTime(startDate, endDate) {
    let years = endDate.getFullYear() - startDate.getFullYear();

    // Check if we need to adjust years based on the month difference
    if (endDate.getMonth() < startDate.getMonth() || (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate())) {
        years--;
    }

    return years;
}

function updateElapsedTime() {
    const currentDate = new Date();
    const years = calculateElapsedTime(startDate, currentDate);
    
    // Format the elapsed time as "X years"
    const formattedTime = `${years} years`;

    // Update the HTML element with the elapsed time
    document.getElementById('elapsed-time').textContent = formattedTime;
}

// Update the time immediately
updateElapsedTime();
