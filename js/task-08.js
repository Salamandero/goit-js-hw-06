const form = document.querySelector('.login-form');


form.addEventListener('submit', (event) => {
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value.trim() === "" || password.value.trim() === "") {
       return alert ('Всі поля повинні бути заповнені!');
    }
    event.preventDefault();
    console.log(`Email: ${email.value}, password: ${password.value}`);
    event.currentTarget.reset();
});




