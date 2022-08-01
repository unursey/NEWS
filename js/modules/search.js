import { preload } from "./preload.js";
import { fetchRequest } from "./fetchRequest.js";
import { renderGoods } from "./renderGoods.js";
import { renderWords } from "./renderWords.js";
import { loadImage } from "./loadImage.js";

export const search = () => {
  const formSearch = document.querySelector(".header__form-search");
  const searchBlock = document.querySelector(".news-search");
  const searchTitle = document.querySelector(".news__title-search");
  const wrapperGoods = document.querySelector(".news__container-all");
  const wrapperSearch = document.querySelector(".news__container-search");
  const select = document.querySelector('.header__select');

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    if (wrapperSearch) {
      wrapperSearch.innerHTML = "";
    }
    wrapperGoods.innerHTML = "";
    select.value = "Россия"

    let res;
    const formData = new FormData(formSearch);
    const newData = Object.fromEntries(formData);

    const init = () => {
      preload.show();
      return Promise.all([
        fetchRequest(`everything?q=${newData.name}`, {
          headers: {
            "X-Api-Key": "98cba3d8ccad45c79fa56f46eabfc1a0",
          },
          callback: (err, data) => {
            if (err) {
              console.warn(err, data);
              return;
            } else {
              res = data.articles.length;
              return renderGoods(err, data, 8);
            }
          },
        }),

        fetchRequest("top-headlines?country=ru", {
          headers: {
            "X-Api-Key": "98cba3d8ccad45c79fa56f46eabfc1a0",
          },
          callback: (err, data) => {
            if (err) {
              console.warn(err, data);
              return;
            } else {
              return renderGoods(err, data, 4);
            }
          },
        }),
      ]);
    };

    init().then((data) => {
      preload.remove();
      wrapperSearch.append(data[0]);
      searchBlock.classList.remove("hide");
      if (res >= 8) {
        res = 8;
      }
      searchTitle.textContent = `По вашему запросу “${
        newData.name
      }” найдено ${res} ${renderWords(
        res,
        "результат",
        "результата",
        "результатов"
      )}`;
      wrapperGoods.append(data[1]);
      loadImage();
    });
  });
};
