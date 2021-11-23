if (document.readyState === 'loading') {

    document.addEventListener("DOMContentLoaded", function (event) {

        // slider
        const swiper = new Swiper('.slider', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.slider__next-btn',
                prevEl: '.slider__prev-btn'
            },
            pagination: {
                el: ".slider__pagination",
                type: "fraction",
              },
            spaceBetween: 70,
            slideToClickedSlide: true,
            centeredSlides: true,
        });


        // tabs

        const tabs = document.querySelectorAll(".tab-card");
        const showTab = function (event, tabId, activeClass, currentClass) {
            event.preventDefault();
            const activeTabBody = document.querySelector(`.${activeClass}`);
            console.log(activeTabBody)
            activeTabBody.classList.remove(activeClass);
            const tab = document.querySelector(`.${currentClass}${tabId}`);
            tab.classList.add(activeClass);
        };

        const switchLink = (link, activeClass) => {
            const activeTab = document.querySelector(`.${activeClass}`);
            activeTab.classList.remove(activeClass);
            link.classList.add(activeClass);

        }

        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            tab.addEventListener('click', function (e) {
                console.log(tabs);
                const id = tab.getAttribute('data-tab');
                showTab(e, id, 'tabs__block_active', 'tabs__block');
                switchLink(e.currentTarget, 'tab-card_active')
            })
        }

        // menu

        const toggleActiveClasses = () => {
            document.body.classList.toggle('page_lock');
            iconMenu.classList.toggle('menu__icon_active');
            menuBody.classList.toggle('menu__body_active');
        }

        const iconMenu = document.querySelector('.menu__icon');
        const menuBody = document.querySelector('.menu__body');

        if (iconMenu) iconMenu.addEventListener('click', toggleActiveClasses)

    });
}


