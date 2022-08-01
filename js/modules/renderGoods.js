
export const renderGoods = (err, data, num) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const template = document.createDocumentFragment();

  const goods = data.articles.map((item) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    let parseDate = Date.parse(item.publishedAt);
    const renderDate = (new Date(parseDate).toLocaleString('en', options)).replace(/,/ig, ' ');
    const card = document.createElement("article");
    card.className = "news__article-card article-card";
    card.innerHTML = `
    <div class="article-card__img-block">
        <img src="${item.urlToImage}" class="article-card__img" alt=""/>
    </div>
    <div class='article-card__block-text'>
      <a href='${item.url}' class="article-card__title">${item.title}</a>
        <p class="article-card__text">${item.description}</p>
        <div class="article-card__sign">
          <p class="article-card__date">${renderDate}</p>
          <p class="article-card__author">${item.author || ''}</p>
        </div>
    </div>
    `;
    return card;
  });

  template.append(...goods.slice(0, num));

  return template;
};
