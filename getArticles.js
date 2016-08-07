    var AlchemyNewsAPI = require('alchemy-news-api');


    var alchemyNewsAPI = new AlchemyNewsAPI('edb630c19edc8c2f618e18f5d4f88895e4704312'); 
    var api_response; 
    var keywordQuery = {
        'keyword_text': 'Clinton',
        'return': ['url', 'title']
    };
    alchemyNewsAPI.getNewsByKeyword(keywordQuery, function (error, response) {
        if (error) {
            console.log(error);
        } else {
          api_response = response
        }

    });