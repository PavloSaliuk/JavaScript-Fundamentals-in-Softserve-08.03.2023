// 4
const form = document.querySelector('fieldset');
const outBlock = document.querySelector('.out');

document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();

    const fio = form.querySelector('input[name="fio"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const birthday = form.querySelector('input[name="birthday"]').value;
    const email = form.querySelector('input[name="email"]').value;

    const output = `ПІБ: ${fio}  <br><br> Номер телефону: ${phone}  <br><br> Дата народження: ${birthday} <br><br> Електронна пошта: ${email}  <br><br> `

    outBlock.innerHTML = output;
});