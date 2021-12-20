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




const tabsInit = () => {
    const tabsParent = document.querySelector(".js-catalog-parent");
    const tabs = document.querySelectorAll(".js-catalog-tabBtn");
    const tabsContent = document.querySelectorAll(".js-catalog-content")

    const hideTabContent = () => {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('active');
        });

        tabs.forEach(item => {
            item.classList.remove('active');
        });
    }


    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('active');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('active');
    }



    tabsParent.addEventListener('click', function (event) {
        const target = event.target;

        if (target && target.classList.contains('js-catalog-tabBtn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent(tabsContent);
    showTabContent();
}

tabsInit();


















// /**
//  * Toggle 'active' class to the Element.
//  *
//  * @param {HTMLElement} tabElemnt - target tab element
//  *
//  *
//  */
// function selectTabContent(tabElemnt) {
//     tabContent.forEach(elementItem => {
//         item.classList.contains(tabElemnt)
//             ? item.classList.add("active")
//             : item.classList.remove("active")
//     })
// }

// /**
//  *
//  * @param {'string'} id - item id
//  *
//  */
// function selectTabBtn(id) {
//     tabBtn.forEach(item => {
//         item.classList.remove("active");
//     });
//     this.classList.add("is-active");
//     tabName = this.getAttribute('data-tab-name');
//     selectTabContent(tabName);
// }


// /**
//  *  descriotion
//  * @param {number} param1 sdfs dfsd f
//  * @param {number} param2 sdfsdfsdffs dfs df
//  * @returns {HTMLElement}
//  * @example
//  * testFunc(1, 2); // <p>1 + 2</p>
//  */
// const testFunc = (param1, param2) => {
//     const elem = document.querySelector('.sdfsdf')
//     return elem
// }


// const getTab = (tabClass) => {
//     return
// }

// const ifClassCorrect = (class) => {
//     return class[0] === '.' || sdfsdfsdf
// }


// const getTabs = (tabClass) => {
//     if (ifClassCorrect(tabClass)) {
//         const target = document.querySelectorAll(tabclass);

//         return target;
//     }

// }


