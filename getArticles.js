
articles = {};

function loadRequest(){
var xmlhttp = new XMLHttpRequest();
var url = "https://access.alchemyapi.com/calls/data/GetNews?apikey=edb630c19edc8c2f618e18f5d4f88895e4704312&return=enriched.url.title,enriched.url.url&start=1469923200&end=1470610800&q.enriched.url.enrichedTitle.entities.entity=|text=hillary%20clinton,type=person|&q.enriched.url.enrichedTitle.taxonomy.taxonomy_.label=law,%20govt%20and%20politics&count=25&outputMode=json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        parseData(data);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

};

function parseData(data) {
    var articleList = data.result.docs
    var out = createText(articleList)
    document.getElementById("articles").innerHTML = out;
}

function createText(articleList){
 var out = '<table class="table table-striped">'; //create striped table 
 var i; 
 var title;
    for(i = 0; i < articleList.length; i++) {
        title = articleList[i].source.enriched.url.title;
        if (title.includes("|")){
            title = title.substring(0, title.indexOf("|"));
        }
        if (title.includes("•")){
            title = title.substring(0, title.indexOf("•"));
        }
        out += '<tr><td><a href="' + articleList[i].source.enriched.url.url + '">' + 
        title + '</a></td></tr>';
    }
    out += '</table>'//end table
    return out; 
}

