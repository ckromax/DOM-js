// Dыбирать элементы на странице 
// 1.1 - выбрать элемент по id
let header = document.getElementById('title');
console.log(header);

//1.2 - Выбрать ОДИН элемент по селектору
const conteiner = document.querySelector('.container');
console.log(conteiner);

//1.3 - выбрать НЕСКОЛЬКО элементов по селектору
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

//2 - Работа с содержимым
console.log(header.textContent);//извлекает текст ьез тегов
console.log(header.innerHTML);// текст и теги
console.log(header.outerHTML);//извлекает сам эелемент и теги с текстом
console.log(header.innerText);//извлекаем текст без тегов
console.log(header.outerText);//извлекаем текст без тегов

//Можете изменить текст( теги воспринимаются как текст)
header.textContent = 'Новый заголовок <i class="bi bi-tencent-qq"></i>';
//меняем html (теги воспринимаются как теги)
header.innerHTML = 'Новый заголовок <i class="bi bi-tencent-qq"></i>';
//полностью перезаписываем и содержимое и сам тег
header.outerHTML = '<h3>Новый заголовок <i class="bi bi-tencent-qq"></i> <h3>';


//3 - Работа с классами(с атрибутом class)
const h2 = document.querySelector('h2');
//Добавление класса
h2.classList.add('big');
h2.classList.add('red');

//4 - удаление классов
h2.classList.remove('big');

//есть ли класс у элемента
console.log(h2.classList.contains('red'));

//переключатель стилей
for (let elem of paragraphs){
    elem.classList.toggle('text');
}


//4 - работа со стилями(атрибут style)
const btn = document.querySelector('input[type=submit]');
console.log(btn);
//добавление стилей
btn.style.color = 'red';
btn.style.background = 'aqua'
btn.style.fontSize = '100px'
btn.style.border = '10px solid green'

//5 - работа с атрибутами
let link = document.querySelector('li:nth-child(2) a')
console.log(link.getAttribute('href'));
//установить / изменить атрибут
link.setAttribute('href', 'https://www.gismeteo.ru/weather-kopeysk-12862/3-days/');
link.setAttribute('target', '_blank');

//удалить атрибут
btn.removeAttribute('style');

//6 - создание нового элемента
const block = document.createElement('div');
block.classList.add('block');
block.innerText = "новый блок";
conteiner.append(block);

const img = document.createElement('img');
img.setAttribute('src', 'img/tencent-qq.svg');
img.alt = 'стул'; //ещё один способ задать атрибут
conteiner.append(img);
img.style.width = '100px';
img.style.height = '100px';
//conteiner.append(img); добавить элемент в коней контейнира
//conteiner.prepend(img); добавить элемент в начало контейнера
//conteiner.before; перед контейниром
//conteiner.after; после

//7 - выбор предков

const lorems = document.querySelectorAll('p');
// выбираем только дочерние параграф
const content = document.querySelector('.content');
const lorensInContent = content.querySelectorAll('p');
console.log(lorensInContent);

//8 - выбор потомков
let form = btn.closest('form'); // поиск ближайшего предка по селектору
form.style.border = '2px dotted orange';

//9 - обработка событий(клик по кнопке)
btn.addEventListener('click', function() {
    event.preventDefault();
    const body = document.querySelector('body');
    body.style.background = 'darkblue';
    body.style.color = 'white';
    const pass = document.querySelector('input[type=password]').ariaValueMax;
    console.log(pass);
});


