# Counter_App
## Date:
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Write your message</h2>
    <textarea id="message" maxlength="100" placeholder="Type something..."></textarea>
    <p id="charCount">0 / 100 characters</p>
  </div>

  <script src="script.js"></script>
</body>
</html>

```
## CSS Code:
```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body, html {
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 6px;
  resize: none;
}

#charCount {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
  transition: color 0.3s ease;
}
```
## Js code:
```
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
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d90959c8-b583-4af4-b428-d58156b4b301" />

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
