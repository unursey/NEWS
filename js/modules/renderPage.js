import { fetchRequest } from "./fetchRequest.js";
import { renderGoods } from './renderGoods.js'
import { preload, preloadDiv } from "./preload.js";
import { loadImage } from "./loadImage.js";

export const renderPage = (country='ru') => {
const wrapperGoods = document.querySelector('.news__container-all');
wrapperGoods.innerHTML = '';

    const init = () => {
        preload.show();
        return Promise.all([
            fetchRequest(`top-headlines?country=${country}`, {
                headers: {
                    'X-Api-Key': '65f5a301725d4d06adeebeffc4e0b99b',
                },
                callback: (err, data) => {
                  if (err) {
                    console.warn(err, data);
                    return;
                  } else {
                    
                    return renderGoods(err, data, 8);
                  }
                }
            }),
        ]);
    };

    init().then(data => {
        preload.remove();
        wrapperGoods.append(...data);

        preloadDiv();
        document.addEventListener("DOMContentLoaded", loadImage())    
    });
}


