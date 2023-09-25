import 'normalize.css'
import './styles/main.scss';

const form = document.querySelector('.connection__form');

const sendData = async (userData) => {
    return await fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(userData)
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);

    const phone = formData.get('phone');
    const email = formData.get('email');

    const userData = {
        phone: phone,
        email: email
    }

    sendData(userData);
    form.reset();
})