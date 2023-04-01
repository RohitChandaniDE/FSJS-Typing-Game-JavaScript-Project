let startTime, endTime;

let startTyping = () => {
  startTime = new Date();
 // document.getElementById("start-typing-btn").style.display = "none";
  document.getElementById("typing-input-container").style.display = "block";
  let btn = document.getElementById("typing-input");
  
 // Start the timer
  let seconds = 0;
  const timerEl = document.getElementById("timer");
  const timerId = setInterval(() => {
    seconds++;
    timerEl.innerText = `Time: ${seconds}s`;
  }, 1000);
  
// Check the typing accuracy and stop the timer when the sentence is completed
  btn.addEventListener("input", () => {
    const typedText = document.getElementById("typing-input").value.trim();
    const expectedText = "JavaScript has very good future.";
        
    if (typedText === expectedText) {
      clearInterval(timerId);
      endTime = new Date();
      const elapsedTime = (endTime - startTime) / 1000  // Convert to seconds
      timerEl.innerText = `Time: ${elapsedTime.toFixed(2)}s`;
    }
  });
}

// Reset
let reset = () => {
  // Reseting the text area 
	document.getElementById("typing-input").value = "";
  // Reseting the timer
  const timerEl = document.getElementById("timer");
	timerEl.innerText = `Time: ${0}s`
}

