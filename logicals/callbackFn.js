// Demo about events listeners
// Closures Demo with Event listeners
// Scope demo with event listeners
// Garbage collection & removeEventListeners

function attachEventListeners() {
  let count = 0;
  // calling button..
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked:", ++count);
  });
}
attachEventListeners();
