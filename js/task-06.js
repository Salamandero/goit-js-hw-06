const validation = document.querySelector('#validation-input');

validation.addEventListener('blur', validText);
function validText( event) {
    if (parseInt(validation.getAttribute('data-length')) === event.currentTarget.value.length) {
        validation.classList.add('valid');
        validation.classList.remove('invalid');
    }

    else {
        validation.classList.add('invalid');
        validation.classList.remove('valid');}
}