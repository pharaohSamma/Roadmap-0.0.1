const newsView = {
    renderNews: function (articles){
        const container = document.getElementById('news-container');
        container.innerHTML = ''; //clear content

        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            `;
            container.appendChild(newsItem)
        });
    }
};

export default newsView;