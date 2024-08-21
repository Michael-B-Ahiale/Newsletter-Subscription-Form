const articleForm=document.querySelector(".newsletter-signup")
const form = document.getElementById("form-signup");
const inputField = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage=document.querySelector(".success-message");


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = inputField.value.trim();

  if (email === "") { 
    errorMessage.textContent = "Please enter your email address";
    inputField.classList.add("error-input");
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address";
    inputField.classList.add("error-input");
  } else {
    inputField.classList.remove("error-input");
    errorMessage.textContent = ""; 
    showSuccessMessage();
  }

  inputField.addEventListener("input",()=>{
    const email = inputField.value.trim();
  
    if (email === "") { 
      errorMessage.textContent = "Please enter your email address";
      inputField.classList.add("error-input");
    } else if (!isValidEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address";
      inputField.classList.add("error-input");
    } else {
      inputField.classList.remove("error-input");
      errorMessage.textContent = ""; 
    }
  })
  

}


);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSuccessMessage(){
  const email=inputField.value.trim();

  successMessage.innerHTML=`<div class="success"> <header>
         <figure class="illustration" style="padding: 0; margin-right: 0%;">
        <img style="padding: 0;" src="../assets/images/icon-success.svg" alt="succes-icon">
      </figure>
        <h1>Thanks for Subscribing</h1>
      </header>
      <p>A confirmation mail has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription</p>
      <button id="dismissButton" onclick="dismissSuccessMessage()">dismiss message</button> </div>`

  articleForm.classList.add("visibility");
  successMessage.classList.remove("visibility");
  

}


function dismissSuccessMessage(){
  
    successMessage.classList.add("visibility");
    articleForm.classList.remove("visibility");
  
  
}
