document.querySelector('.navbar-burger').addEventListener("click", function(){
    let menu = document.querySelector('.navbar-menu');
    if (menu.className == 'navbar-menu') {
        menu.className = 'navbar-menu is-active';
    } else {
        menu.className = 'navbar-menu';
    }
})