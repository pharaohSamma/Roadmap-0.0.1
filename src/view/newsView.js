const newsView = {
    renderNews: function (data){
        const container = document.getElementById('news-container');
        container.innerHTML = ''; //clear content

        data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
            <img src= "${article.urlToImage}" alt="${article.title}"> 
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
             <a href="${article.url}" target="_blank">Read more</a>
            `;
            container.appendChild(newsItem)
        });
    }
};

export default newsView;