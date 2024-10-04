import newsModel from "../model/newsModel.js";
import newsView from "../view/newsView.js";

let cureentPage = 1;
let pageSize = 8;
const newsController = {
   
    init: function () {
        //Assigment A1
        // newsModel.fetchNews(function (error, articles){
        //     if(error){
        //         console.log(error);
        //     } else {
        //         newsView.renderNews(articles);
        //     }
        // });

        //Assigment A2
        this.fetchPage(cureentPage);

        document.getElementById('next-btn').addEventListener('click', ()=>{
            cureentPage ++;
            this.fetchPage(cureentPage);
        })

        document.getElementById('prev-btn').addEventListener('click', () =>{
            if(cureentPage >1){
                cureentPage --;
                this.fetchPage(cureentPage);
            }
        })
    },

    fetchPage: function(page){
        newsModel.fetchNews(page, pageSize, function (error, articles) {
            if(error) {
                console.error(error);
            } else {
                newsView.renderNews(articles);
            }
        });
    }
};

export default newsController;