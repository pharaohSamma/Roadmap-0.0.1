const newsModel = {
    fetchNews: function (callback){
        const xhr = new XMLHttpRequest();
        const apiKey = '05e367da39364c7b8c15fa9b968ff4e2';
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

        xhr.open('GET', url , true);
        xhr.onload = function (){
            if (xhr.status === 200){
                const data = JSON.parse(xhr.responseText);
                callback(null, data.articles);
            } else {
                callback('Error fetching data', null)
            }
        };
        xhr.send();
    }
};

export default newsModel;