const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLimit = 100;

textarea.addEventListener("input", () => {
  const currentLength = textarea.value.length;
  charCount.textContent = `${currentLength} / ${maxLimit} characters`;

  if (currentLength > maxLimit) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = currentLength === maxLimit ? "orange" : "#333";
  }
});
