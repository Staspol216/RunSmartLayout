const mainSwiperConfig = {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}

const swiper = new Swiper('.swiper', mainSwiperConfig);

/**
 * Toggle 'active' class to the Element.
 * 
 * @param {HTMLElement} tabElemnt - target tab element
 * 
 * 
 */
function selectTabContent(tabElemnt) {
    tabContent.forEach(elementItem => {
        item.classList.contains(tabElemnt)
            ? item.classList.add("active")
            : item.classList.remove("active")
    })
}

/**
 * 
 * @param {'string'} id - item id 
 * 
 */
function selectTabBtn(id) {
    tabBtn.forEach(item => {
        item.classList.remove("active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}


function tab() {
    const tabBtn = document.querySelectorAll(".tabs-nav__btn");
    let tabContent = document.querySelectorAll(".catalog__content");
    let tabName;

    tabBtn.forEach(item => {
        item.addEventListener("click", () => {
            console.log(event);
            selectTabBtn(item.dataset.id);
        })
    });
}

/**
 *  descriotion
 * @param {number} param1 sdfs dfsd f
 * @param {number} param2 sdfsdfsdffs dfs df
 * @returns {HTMLElement}
 * @example
 * testFunc(1, 2); // <p>1 + 2</p>
 */
const testFunc = (param1, param2) => {
    const elem = document.querySelector('.sdfsdf')
    return elem
}


const getTab = (tabClass) => {
    return
}

const ifClassCorrect = (class) => {
    return class[0] === '.' || sdfsdfsdf
}

const getTabs = (tabClass) => {
    if (ifClassCorrect(tabClass)) {
        const target = document.querySelectorAll(tabclass);

        return target;
    }

}

const sectio1Tab = getTab('section-1');

const mobileButtons = getTabs('.mobile-tab')

mobileButtons.forEach(mobileButton => {
    mobileButton.style.color = 'red';
})

