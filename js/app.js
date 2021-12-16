const newApp = document.querySelector('.app'); // нахожу сам див с классом арр
const newUl = document.createElement('ul'); //  с помощью createElement создал новый Ul
newUl.classList.add('app__ul-list'); // создал класс для ul
newApp.prepend(newUl); // добавляем сам ul после див но вначало

const arrBase = [

    {
        url:"img/batman.jpg",
        title: "Бэтмен",
    },

    {
        url:"img/capitan-amerika.jpg",
        title: "Капитан америка",
    },

    {
        url: "img/deadpull.jpg",
        title: "Дэдпул",
    },

    {
        url: "img/groot.jpg",
        title: "Малыш грут",
    }, 

    {
        url: "img/hulk.jpg",
        title: "Халк",
    }, 

    {
        url: "img/spider-man.jpg",
        title: "Человек паук",
    },

    {
        url: "img/starwars.jpg",
        title: "Имперские штурмовики",
    },

    {
        url: "img/superman.jpg",
        title: "Супермен",
    }

];

arrBase.forEach(function(elem, index) {

    newUl.append(addBase(elem));
    console.log(elem, index);

});

function addBase(element) {

    const urlText = element.url;
    const titleText = element.title;

    const addItem = `
    <article class="app__article">
    <img class="app__img" src="${urlText}">
    <p class="app__element">${titleText}</p>
    </article>
    `;

    const newLi = document.createElement('li'); // создал новый li
    newLi.classList.add('app__li-item'); // создал класс для li
    newLi.innerHTML = addItem; // добавил в сам ли текст из addItem
    
    return newLi;
}


