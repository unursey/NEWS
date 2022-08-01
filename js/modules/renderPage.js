import { fetchRequest } from "./fetchRequest.js";
import { renderGoods } from './renderGoods.js'
import { preload } from "./preload.js";
import { loadImage } from "./loadImage.js";

export const renderPage = (country='ru') => {
const wrapperGoods = document.querySelector('.news__container-all');
wrapperGoods.innerHTML = '';

    const init = () => {
        preload.show();
        return Promise.all([
            fetchRequest(`top-headlines?country=${country}`, {
                headers: {
                    'X-Api-Key': '98cba3d8ccad45c79fa56f46eabfc1a0'
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
        loadImage();  
    });
}


