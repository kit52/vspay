
import Accordion from 'accordion-js'

import Swiper, { Pagination } from "swiper";


document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-mobile')
    const body = document.querySelector('body')
    const header = document.querySelector('.header-mobile')
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        nav.classList.toggle('active')
        header.classList.toggle('active')
        body.classList.toggle('lock')

    })
    nav.addEventListener('click', (e) => {
        if (e.target == nav) {
            burger.classList.toggle('active')
            nav.classList.toggle('active')
            body.classList.toggle('lock')
        }
    })

    if (document.querySelector('.video')) {

        const videos = document.querySelectorAll('.video');
        videos.forEach((v) => {
            const videoId = v.getAttribute('data-video');

            v.addEventListener('click', () => {
                v.innerHTML = '<iframe src="//www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1" scrolling="no" style="width: 100%; height: 100%;" allow="autoplay"></iframe>';
                v.classList.add("active");
            })
        })
    }

    if (document.querySelector('.steps-section')) {
        const swiper = new Swiper(".steps-section__swiper", {
            slidesPerView: 1,

            modules: [Pagination],
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                [768]: {
                    watchOverflow: true,
                    slidesPerView: 3,
                    spaceBetween: 90,
                },
                [1200]: {
                    watchOverflow: true,
                    slidesPerView: 3,
                    spaceBetween: 150,
                },

            }
        });

        // const sliderPagination = document.querySelector('.steps-section .swiper-pagination')
        // if (swiper.isLocked) {
        //     sliderPagination.classList.add('hide')
        // } else {
        //     sliderPagination.classList.remove('hide')
        // }

    }
    if (document.querySelector('.dropdown')) {
        const dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        })
    }
    if (document.querySelector('.news-section__rows-tiles-wrapper')) {
        const wrapperControl = document.querySelector('.news-section__rows-tiles-wrapper');
        const wrapperContent = document.querySelector('.news-section__wrapper')
        const rowsControl = wrapperControl.querySelector('.rows');
        const tilesControl = wrapperControl.querySelector('.tiles');
        wrapperControl.addEventListener('click', (e) => {
            if (e.target.closest('.rows')) {

                tilesControl.classList.remove('selected')
                rowsControl.classList.add('selected')
                wrapperContent.classList.remove('tile')
            } else if (e.target.closest('.tiles')) {
                rowsControl.classList.remove('selected')
                tilesControl.classList.add('selected')
                wrapperContent.classList.add('tile')
            }
        })
    }
    function accordionsInit() {
        const accordions = [...document.querySelectorAll('.accordion-container')]
        new Accordion(accordions)
    }
    const accordion = document.querySelector('.accordion-container')
    if (accordion) {
        accordionsInit()
    }
    const switchLink = document.querySelectorAll('.switch');
    if (switchLink) {

        switchLink.forEach(item => {
            item.addEventListener('click', () => {

                const url = item.getAttribute('data-href');
                setTimeout(() => {
                    location.href = url
                }, 700)
            })
        })
    }
    function closeModal(modal) {
        const body = document.querySelector('body')
        modal.classList.remove('open');
        body.classList.remove('lock');
    }
    function openModal(modal) {
        const body = document.querySelector('body')
        modal.classList.add('open');
        body.classList.add('lock');
    }
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    if (modalTriggers.length) {
        const modalTermOfUse = document.querySelector('.termOfUse');
        const privacyPolice = document.querySelector('.privacyPolice');
        modalTriggers.forEach(item => {
            item.addEventListener('click', () => {
                const modalAddress = item.getAttribute('data-href');
                if (modalAddress == 'modal-term') {

                    openModal(modalTermOfUse)

                } else if (modalAddress == 'modal-privacy') {
                    openModal(privacyPolice)

                }

            })
        })
    }

    const modals = document.querySelectorAll('.modal');
    if (modals.length) {

        modals.forEach(item => {
            const close = item.querySelector('.close')
            document.addEventListener('keydown', (e) => {
                if (e.code === "Escape" && item.classList.contains('open')) {
                    closeModal(item)
                }
            })
            close.addEventListener("click", () => {
                closeModal(item)
            })
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal')) {
                    closeModal(item)
                }
            })
        })
    }
});