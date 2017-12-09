// require cheerio 
var cheerio = require('cheerio');

// get html
var request = require('request');


// Use Article model
var Article = require('../models/Article');

// define the site we want to scrape
var website = 'https://www.wired.com/latest-news';

function scrapedWeb(callback) 
{
  console.log('Requesting news site...')
  request(website, function(error, response, html)
    
  {
    if (error) console.log("Scraping Error", error);

    console.log('Loading html into cheerio...')
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);

    //Target articles by tag

    $( "ul.archive-list-component__items li").each(function(i, element) 
    {
      // Add the text and href of every link, and save them as properties of the result object
      var title = $(this).children("div").children("a").children("h2").text();
      var summary = $(this).children("div").children("a").children("p").text();
      var link = $(this).children('a').attr("href");

      //result.picture = $(this).children("img").attr("src");



      var scrapeArticle = new Article(
      {
        title: title,
        link: link
      });

      // Save Article
      scrapeArticle.save(function(error) 
      {
        //if (error) console.log("Unable to save article", error); //removes duplicate error msg
      });
    });


    callback();
  });
      
}

// export the scraps
exports.scrapedWeb = scrapedWeb;