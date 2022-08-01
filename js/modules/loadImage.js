export const loadImage = () => {
    const imgs = document.querySelectorAll('.article-card__img');
    
    imgs.forEach((img) => {
        return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(new Error('Error!'));
            img.src = '/img/news/noimage.png';
        }
        //img.src = src;
        })
    })

  }