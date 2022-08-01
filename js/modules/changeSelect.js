import {renderPage} from './renderPage.js';

export const changeSelect = () => {
    const wrapperGoods = document.querySelector('.news__container-all');
    const searchBlock = document.querySelector('.news-search');
    const select = document.querySelector('.header__select');
    let country;
    wrapperGoods.innerHTML = '';
    select.addEventListener('change', () => {
        if (select.value === 'Россия') {
            country = 'ru'
        } else if (select.value === 'США') {
            country = 'us'
        } else if (select.value === 'Турция') {
            country = 'tr'
        } else if (select.value === 'Греция') {
            country = 'gr'
        } else if (select.value === 'Франция') {
            country = 'fr'
        } else if (select.value === 'Украина') {
            country = 'ua'
        } else if (select.value === 'Китай') {
            country = 'cn'     
        } else if (select.value === 'Южная Корея') {
        country = 'kr'
        }    
        
        if (searchBlock) {
            searchBlock.classList.add('hide');
        }
        renderPage(country);
    })
};