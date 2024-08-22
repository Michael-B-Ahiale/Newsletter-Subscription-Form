const articleForm = document.querySelector(".newsletter-signup");
const form = document.getElementById("form-signup");
const inputField = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

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
    showSuccessMessage(email);
  }

  inputField.addEventListener("input", () => {
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
  });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showSuccessMessage(email) {
  // Clear the existing content in successMessage
  successMessage.innerHTML = '';

  const successDiv = document.createElement('div');
  successDiv.classList.add('success');

  const header = document.createElement('header');

  const figure = document.createElement('figure');
  figure.classList.add('illustration');
  figure.style.padding = '10px 0';
  figure.style.marginRight = '0';

  const img = document.createElement('img');
  img.src = '../assets/images/icon-success.svg';
  img.alt = 'success-icon';
  img.style.padding = '0';

  figure.appendChild(img);
  header.appendChild(figure);

  const h1 = document.createElement('h1');
  h1.textContent = 'Thanks for Subscribing';
  header.appendChild(h1);

  const p = document.createElement('p');
  p.innerHTML = `A confirmation mail has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
  header.appendChild(p);

  const dismissButton = document.createElement('button');
  dismissButton.id = 'dismissButton';
  dismissButton.textContent = 'Dismiss Message';
  dismissButton.addEventListener('click', dismissSuccessMessage);

  successDiv.appendChild(header);
  successDiv.appendChild(dismissButton);

  successMessage.appendChild(successDiv);

  // Hide the form and show the success message
  articleForm.classList.add("visibility");
  successMessage.classList.remove("visibility");
}

function dismissSuccessMessage() {
  successMessage.classList.add("visibility");
  articleForm.classList.remove("visibility");
}
