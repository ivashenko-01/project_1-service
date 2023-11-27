/* =============================================================== */
/* -- =============== -- SHOW MENU -- =============== --*/ 


// --- Поиск нужных элементов ---
const menuButton = document.getElementById('menu-button'), // -- Поиск кнопки для открытия меню
      menuClose = document.getElementById('menu-close'), // -- Поиск кнопки для закрытия меню
      menuContent = document.getElementById('menu-content') // -- Поиск отображаемого контента

console.log(menuButton);
console.log(menuClose);
console.log(menuContent);


// --- Проверка существования кнопки -> добавляем обработчик клика -> проверяем и меняет наличие класса
if(menuButton){
    menuButton.addEventListener('click', () =>{
        menuContent.classList.toggle('show-menu')
        menuButton.classList.remove('active')
        menuClose.classList.add('active')
    })
}

// --- Проверка существования кнопки -> добавляем обработчик клика -> удаляем нужный класс
if(menuClose){
    menuClose.addEventListener('click', () =>{
        menuContent.classList.remove('show-menu')
        menuButton.classList.add('active')
        menuClose.classList.remove('active')
    })
}

// --- Проверка клика вне двух кнопок и автоматическое закрытие всплывающего окна
document.body.addEventListener('click', (event) =>{
    if(event.target.id !== menuClose.id || event.target.id !== menuButton.id) {
        if(event.target.id === menuClose.id || event.target.id === menuButton.id){
            return
        } else {
            menuContent.classList.remove('show-menu');
            menuButton.classList.add('active')
            menuClose.classList.remove('active')
        }
    }
})
