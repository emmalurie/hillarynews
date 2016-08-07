
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
    var out = "";
    var i;
    var articleList = data.result.docs
    out  +=  '<table class="table table-striped">';
    for(i = 0; i < articleList.length; i++) {
        out += '<tr><td><a href="' + articleList[i].source.enriched.url.url + '">' + 
        articleList[i].source.enriched.url.title + '</a></td></tr>';
    }
    out += '</table>'
    document.getElementById("articles").innerHTML = out;
}