const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', NameInputChange);

function NameInputChange(event) {
        
    if (event.currentTarget.value.trim() !== '') {
       nameOutputRef.textContent = event.currentTarget.value;
    } else
        nameOutputRef.textContent = 'Anonymous';
}
