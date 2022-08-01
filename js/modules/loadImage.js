export const loadImage = () => {
  const imgs = document.querySelectorAll(".article-card__img");

  imgs.forEach((img) => {
    return new Promise((resolve, reject) => {
      const newImg = new Image();
      const newOverlay = document.createElement("div");
      newOverlay.className = "article-card__img-block";
      newOverlay.append(newImg);
      newImg.className = "article-card__img";
      newImg.src = img.dataset.src;

      newImg.addEventListener("load", () => {
        resolve(img);

        document.querySelector(".animate").replaceWith(newOverlay);
      });

      newImg.onerror = () => {
        newImg.src = "../img/news/noimage.png";
        reject(new Error("Error!"));
      };
    });
  });
};