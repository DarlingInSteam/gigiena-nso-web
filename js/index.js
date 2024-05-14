document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelector('.collapse.navbar-collapse');
    var burgerMenu = document.querySelector('.burger-menu');

    function checkMenuWidth() {
        if (menuItems.offsetWidth >= menuItems.scrollWidth) {
            burgerMenu.innerHTML = ''; // Очищаем бургер-меню, если элементы помещаются
            burgerMenu.display = display.block;

        } else {
            // Копируем элементы из заголовка в бургер-меню
            burgerMenu.innerHTML = menuItems.innerHTML;
            burgerMenu.display = display.block;
        }
    }

    window.addEventListener('resize', checkMenuWidth);
    checkMenuWidth();
});