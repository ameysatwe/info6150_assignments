let startTime = 0;
let elapsedTime = 0;
let stopwatchInterval;

// Initialize date picker to show the current date
const datePicker = document.getElementById("datePicker");
const currentDate = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
datePicker.value = currentDate;
datePicker.disabled = false; // Disable editing the date
datePicker.addEventListener("keydown", function (event) {
  event.preventDefault(); // Prevent typing in the date input field
});
// datePicker.contentEditable = false;
// datePicker.isContentEditable = true;

// Function to format time in HH:MM:SS
const formatTime = (milliseconds) => {
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// Update time display asynchronously
const updateTime = async () => {
  return new Promise((resolve) => {
    stopwatchInterval = setInterval(() => {
      const currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      document.getElementById("timeDisplay").innerText =
        formatTime(elapsedTime);
    }, 1000);
    resolve();
  });
};

// Start the stopwatch
const startStopwatch = async () => {
  if (!stopwatchInterval) {
    startTime = Date.now() - elapsedTime;
    await updateTime();
  }
};

// Stop the stopwatch
const stopStopwatch = async () => {
  return new Promise((resolve) => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    resolve();
  });
};

// Reset the stopwatch
const resetStopwatch = async () => {
  return new Promise((resolve) => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById("timeDisplay").innerText = "00:00:00";
    resolve();
  });
};

// Event listeners for buttons
document
  .getElementById("startButton")
  .addEventListener("click", startStopwatch);
document.getElementById("stopButton").addEventListener("click", stopStopwatch);
document
  .getElementById("resetButton")
  .addEventListener("click", resetStopwatch);
