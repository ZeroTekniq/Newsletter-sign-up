const form = document.getElementById('form');
const dismissButton = document.querySelector('.dismiss-btn');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

dismissButton.addEventListener('click', () => {
    closeSuccessPage();
})


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const validLabel = inputControl.querySelector('.valid-label');
    const errorDisplay = inputControl.querySelector('.valid-label');

    errorDisplay.innerText = message;
    element.classList.add('error');
    validLabel.classList.add('error-label');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.valid-label');

    errorDisplay.innerText = message;
    element.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setError(email, 'Email cannot be blank');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email, '');
        openSuccessPage();
    }
}

function openSuccessPage() {
    const successPage = document.querySelector('.success-page');
    const mainPage = document.querySelector('.main-page');

    mainPage.style.display = 'none';
    successPage.style.display = 'grid';
    updateSuccessPage();
}

function closeSuccessPage() {
    const successPage = document.querySelector('.success-page');
    const mainPage = document.querySelector('.main-page');
    
    successPage.style.display = 'none';
    mainPage.style.display = 'grid';
    email.value = '';
}

function updateSuccessPage() {
    const successPageUserEmail = email.value.trim();
    document.getElementById('user-email').textContent = successPageUserEmail;
}
