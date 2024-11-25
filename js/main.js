const current_page_active = document.querySelectorAll('.current_page_active');
const activePage = (links) => {
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(activeElement => {
                if(activeElement.className == 'active') {
                    activeElement.classList.remove('active')
                }
            })

            link.classList.add('active')
        })
    });
}

activePage(current_page_active[0].childNodes)


// show mobile menu bar 
const show_menu_bar = document.querySelector('.show_menu_bar');
const close_menu_bar = document.querySelector('.close_menu_bar');
const mobile_menu_bar_close = document.querySelector('.mobile_menu_bar_close');
const nav_bar = document.querySelector('.nav_bar');


show_menu_bar.addEventListener('click', () => {
    nav_bar.classList.add('show')
    mobile_menu_bar_close.classList.add('show')
})
close_menu_bar.addEventListener('click', () => {
    nav_bar.classList.remove('show')
    mobile_menu_bar_close.classList.remove('show')
})
