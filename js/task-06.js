const validation = document.querySelector('#validation-input');

validation.addEventListener('blur', validText);
function validText( event) {
    if (parseInt(validation.getAttribute('data-length')) === event.currentTarget.value.length) {
        changeClass('valid', 'invalid')
    }
    else {
        changeClass('invalid', 'valid');
        }
}
function changeClass(add, remove) {
    validation.classList.add(add);
    validation.classList.remove(remove);
}