const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit-email', e => {
    e.preventDefault();
    console.log(email.value);

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const validLabel = inputControl.querySelector('.valid-label');
    const errorDisplay = inputControl.querySelector('.valid-label');

    errorDisplay.innerText = message;
    element.classList.add('error');
    element.classList.remove('valid');
    validLabel.classList.remove('success');
    validLabel.classList.add('error-label');
    inputControl.classList.remove('success', 'valid');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const validLabel = inputControl.querySelector('.valid-label');
    const errorDisplay = inputControl.querySelector('.valid-label');

    errorDisplay.innerText = message;
    element.classList.add('valid');
    validLabel.classList.add('success');
    inputControl.classList.remove('error');
    validLabel.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
        console.log('Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
        console.log('Looks like this is not an email');
    } else {
        setSuccess(email, 'Success');
        console.log('Success');
    }
}