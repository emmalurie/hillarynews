import 'alchemy-news-api';

var AlchemyNewsAPI = require('alchemy-news-api');
var alchemyNewsAPI = new alchemyNews('edb630c19edc8c2f618e18f5d4f88895e4704312');
var keywordQuery = {'keyword_text': 'Clinton', 'return': ['url', 'title']};
        alchemyNewsAPI.getNewsByKeyword(keywordQuery, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                // do something with response

                console.log(response);
            }
        });
