import newsModel from "../model/newsModel"
import newsView from "../view/newsView";

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