const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

function tab() {
    let tabBtn = document.querySelectorAll(".tabs-nav__btn");
    let tabContent = document.querySelectorAll(".catalog__content");
    let tabName;

    tabBtn.forEach(item => {
        item.addEventListener("click", selectTabBtn)
    });

    function selectTabBtn() {
        tabBtn.forEach(item => {
            item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active")
        })
    }
}

tab();
