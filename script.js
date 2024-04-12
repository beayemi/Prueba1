document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usernamePattern = /^[a-zA-Z]+$/;
        const isUsernameValid = usernamePattern.test(username);

        const passwordPattern = /^\d+$/;
        const isPasswordValid = passwordPattern.test(password);

        if (isUsernameValid && isPasswordValid) {
            window.location.href = 'indexlogeado.html';

            const usernameDisplay = document.getElementById('usernameDisplay');
            usernameDisplay.textContent = 'Logeado como: ' + username;
        } else {
            alert('Por favor, ingrese solo letras en el nombre de usuario y solo números en la contraseña.');
        }

    });


});
