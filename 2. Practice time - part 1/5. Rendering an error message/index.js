// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errorOccurred = document.getElementById("error")
function purchase() {
  console.log("Button is clicked!")
  errorOccurred.textContent = "Something went wrong, please try again"
}
