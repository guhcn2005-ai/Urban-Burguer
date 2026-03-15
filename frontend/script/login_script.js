document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.remove('active');
    });
});


    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert('Preencha todos os campos.');
            return;
        }

        if (email === 'admin@gmail.com' && password === 'admin123') {
            window.location.href = '/adm.html';
        } else {
            alert('Email ou senha inválidos.');
        }
    });