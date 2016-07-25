    var AlchemyNewsAPI = require('alchemy-news-api');
    var fs = require('fs');

    var alchemyNewsAPI = new AlchemyNewsAPI('edb630c19edc8c2f618e18f5d4f88895e4704312'); 
    var outputJSONFile = '/users/emmalurie/desktop/hillarynews/output.json'
    var keywordQuery = {
        'keyword_text': 'Clinton',
        'return': ['url', 'title']
    };
    alchemyNewsAPI.getNewsByKeyword(keywordQuery, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            var response_
            fs.writeFile(outputJSONFile, JSON.stringify(response,null,2), function(err)   {
            if (err) {
                console.log('WriteFile Error:', err);
            } else {
            console.log("JSON saved to " + outputJSONFile);
      }
    });
        }

    });