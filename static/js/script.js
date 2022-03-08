const form = document.getElementById('form');
const passwordElement1 = document.querySelector('#password1');
const passwordElement2 = document.querySelector('#password2');
const messageContainer = document.querySelector('.message-container');
const message = document.querySelector('#message');

let isValid = false;
let isPasswordMatch = false;

function validateForm() {
    // Using Constraint Validation API
    isValid = form.checkValidity();

    // Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Check to see if password match
    if(passwordElement1.value === passwordElement2.value){
        isPasswordMatch = true;
        passwordElement1.style.borderColor = 'green';
        passwordElement2.style.borderColor = 'green';
    }
    else {
        isPasswordMatch = false;
        message.textContent = 'Passwords do not match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        passwordElement1.style.borderColor = 'red';
        passwordElement2.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    if (isValid && isPasswordMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
        storeFormData();
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };

    // Do something with the data
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    // Validate From
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);
