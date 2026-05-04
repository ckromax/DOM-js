//задание 1
let text = document.querySelector(".test-text");
text.prepend("Привет, мир! Меня зовут Дыня");

text.style.color = 'red';
text.style.background = 'aqua';
text.style.fontSize = '100px';
text.style.border = '10px solid green';
// задание 2
const email = document.getElementById('email')
email.value = 'mail@mail.ru'
email.disabled = true
const checkbox = document.getElementById('btn')
checkbox.textContent = 'Enter'
// task 3
const link = document.createElement('a')
link.textContent = 'Перейти';
link.href = 'https://midis.ru/'
link.target = '_blank'
link.classList.add('link-hover');
document.body.append(link);
console.log(link);