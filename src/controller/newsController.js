import newsModel from "../model/newsModel.js";
import newsView from "../view/newsView.js";

const newsController = {

    init: function () {
        newsModel.fetchNews(function (error, articles){
            if(error){
                console.log(error);
            } else {
                newsView.renderNews(articles);
            }
        });
    }
};

export default newsController;