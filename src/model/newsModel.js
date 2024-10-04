const newsModel = {
    fetchNews: function (page, pageSize, callback){
        const xhr = new XMLHttpRequest();
        const apiKey = '05e367da39364c7b8c15fa9b968ff4e2';
        //assigment A1
        // const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-04&sortBy=publishedAt&apiKey=${apiKey}`;

        //assigment A2
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&sortBy=publishedAt&page=${page}
                                        &pageSize=${pageSize}&apiKey=${apiKey}`;

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