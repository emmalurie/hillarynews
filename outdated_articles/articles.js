    var AlchemyNewsAPI = require('alchemy-news-api');
    var fs = require('fs');

    var alchemyNewsAPI = new AlchemyNewsAPI('edb630c19edc8c2f618e18f5d4f88895e4704312'); 
    // var outputJSONFile = '/users/emmalurie/desktop/hillarynews/output.json'
    // var arrayOutputFile = '/users/emmalurie/desktop/hillarynews/array.js'

    var keywordQuery = {
        'keyword_text': 'Clinton',
        'return': ['url', 'title']
    };
    alchemyNewsAPI.getNewsByKeyword(keywordQuery, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            var response_json = JSON.stringify(response,null,2);
            //fs.writeFile(outputJSONFile, response_json, function(err)   {
            //if (err) {
                //console.log('WriteFile Error:', err);
          //  } else {
            //console.log("JSON saved to " + outputJSONFile);
     // }
   // });

        var response_js_docs = response.result.docs;
        //console.log(response_js_docs);
        var result_list = [];
        for (i = 0; i < response_js_docs.length; i++){
        var mini_dict = {};
            mini_dict['url'] = response_js_docs[i].source.enriched.url.url;
            mini_dict['title'] = response_js_docs[i].source.enriched.url.title;
            result_list.push(mini_dict)
        }
    //     console.log(result_list)
    //     fs.writeFile(arrayOutputFile, result_list, function(err)   {
    //         if (err) {
    //             console.log('WriteFile Error:', err);
    //         } else {
    //         console.log("Array saved to " + outputJSONFile);
    //   }
    // });


        }

    });
