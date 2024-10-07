import newsModel from "../model/newsModel.js";
import newsView from "../view/newsView.js";

let cureentPage = 1;
let pageSize = 8;
let totalArticles = 0;
let totalPages = 0;
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
        this.updateButtonState();
        
        const nextButton =  document.getElementById('next-btn');
        const prevButton = document.getElementById('prev-btn');

        nextButton.removeEventListener('click',this.handleNextClick);
        prevButton.removeEventListener('click', this.handlePreviousClick);
        
        nextButton.addEventListener('click', this.handleNextClick.bind(this));
        prevButton.addEventListener('click', this.handlePrevClick.bind(this));

      
    },

    fetchPage: function(page){
        newsModel.fetchNews(page, pageSize, function (error, data) {
            if(error) {
                document.getElementById('errorMessage').style.visibility = "";
                document.getElementById('pagination-btn').style.visibility = "hidden";
                console.error(error);
            } else {
                document.getElementById('errorMessage').style.visibility = "hidden";
                document.getElementById('pagination-btn').style.visibility = "";
                totalArticles = data.totalResults;
                
                totalPages = Math.ceil(totalArticles/pageSize);
                newsView.renderNews(data);
            }
        });
    },

    handleNextClick: function () {
        cureentPage++;
        this.fetchPage(cureentPage);
        this.updateButtonState();
    },

    // Handle the "Previous" button click
    handlePrevClick: function () {
        if (cureentPage > 1) {
            cureentPage--;
            this.fetchPage(cureentPage);
        };
        this.updateButtonState();
    },

    updateButtonState : function(){
        const prevButton = document.getElementById('prev-btn');
        const nextButton =  document.getElementById('next-btn');
        
        prevButton.disabled = (cureentPage === 1);
        
        nextButton.disabled = (cureentPage === totalPages);
        
    }
};


export default newsController;