import React from "react";
import axios from "axios";

class Admin extends React.Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    numArticles: 5,
    articles: {
      
    }

  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // buildQueryURL = () => {
    
  //   // queryURL is the url we'll use to query the API
  //   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  //   // Begin building an object to contain our API call's query parameters
  //   // Set the API key
  //   var queryParams = { "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931" };

  //   // Grab text the user typed into the search input, add to the queryParams object
  //   queryParams.q = this.state.searchTerm
  //     .val()
  //     .trim();

  //   // If the user provides a startYear, include it in the queryParams object
  //   var startYear = this.state.startYear
  //     .val()
  //     .trim();

  //   if (parseInt(startYear)) {
  //     queryParams.begin_date = startYear + "0101";
  //   }

  //   // If the user provides an endYear, include it in the queryParams object
  //   var endYear = this.state.endYear
  //     .val()
  //     .trim();

  //   if (parseInt(endYear)) {
  //     queryParams.end_date = endYear + "0101";
  //   }

  //   // Logging the URL so we have access to it for troubleshooting
  //   console.log("---------------\nURL: " + queryURL + "\n---------------");
  //   console.log(queryURL + $.param(queryParams));
  //   return queryURL + $.param(queryParams);
  // }

  


  // updatePage = (NYTData) => {
  //   // Get from the form the number of results to display
  //   // API doesn't have a "limit" parameter, so we have to do this ourselves
  //   var numArticles = this.state.numArticles.val();

  //   // Log the NYTData to console, where it will show up as an object
  //   console.log(NYTData);
  //   console.log("------------------------------------");

  //   // Loop through and build elements for the defined number of articles
  //   for (var i = 0; i < numArticles; i++) {
  //     // Get specific article info for current index
  //     var article = NYTData.response.docs[i];

  //     // Increase the articleCount (track article # - starting at 1)
  //     var articleCount = i + 1;

  //     // Create the  list group to contain the articles and add the article content for each
  //     var $articleList = $("<ul>");
  //     $articleList.addClass("list-group");

  //     // Add the newly created element to the DOM
  //     $("#article-section").append($articleList);

  //     // If the article has a headline, log and append to $articleList
  //     var headline = article.headline;
  //     var $articleListItem = "<li class='list-group-item articleHeadline'>";

  //     if (headline && headline.main) {
  //       console.log(headline.main);
  //       $articleListItem.append(
  //         "<span class='label label-primary'>" +
  //           articleCount +
  //           "</span>" +
  //           "<strong> " +
  //           headline.main +
  //           "</strong>"
  //       );
  //     }

  //     // If the article has a byline, log and append to $articleList
  //     var byline = article.byline;

  //     if (byline && byline.original) {
  //       console.log(byline.original);
  //       $articleListItem.append("<h5>" + byline.original + "</h5>");
  //     }

  //     // Log section, and append to document if exists
  //     var section = article.section_name;
  //     console.log(article.section_name);
  //     if (section) {
  //       $articleListItem.append("<h5>Section: " + section + "</h5>");
  //     }

  //     // Log published date, and append to document if exists
  //     var pubDate = article.pub_date;
  //     console.log(article.pub_date);
  //     if (pubDate) {
  //       $articleListItem.append("<h5>" + article.pub_date + "</h5>");
  //     }

  //     // Append and log url
  //     $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
  //     console.log(article.web_url);

  //     // Append the article
  //     $articleList.append($articleListItem);
  //   }
  // }

  // // Function to empty out the articles
  // clear = () => {
  //   $("#article-section").empty();
  // }

  // CLICK HANDLERS
  // ==========================================================

  // .on("click") function associated with the Search Button

  // handleSubmit = (event) =>{
  //     event.preventDefault();
  //     searchArticle = () => {
  //     const apiKey ="d0254c65766f4633a68e2a83973f20e6";
  //     const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + this.state.subject + "&begin_date=" + this.state.beginYear + "0101&end_date=" + this.state.endYear + "0101";

  //     return axios.get(queryUrl).then((res) =>{
  //       console.log(res);
  //       this.setState({articles: res.data.response.docs});
  //     });
  //   }
  // }




  // runSearch = (event) => {
  //   // This line allows us to take advantage of the HTML "submit" property
  //   // This way we can hit enter on the keyboard and it registers the search
  //   // (in addition to clicks). Prevents the page from reloading on form submit.
  //   event.preventDefault();

  //   // Empty the region associated with the articles
  //   clear();

  //   // Build the query URL for the ajax request to the NYT API
  //   var queryURL = buildQueryURL();

  //   // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  //   // The data then gets passed as an argument to the updatePage function
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(updatePage).then(res => {
  //         if (res.data.status === "error") {
  //           throw new Error(res.data.message);
  //         }
  //         this.setState({ results: res.data.message, error: "" });
  //       })
  //     .catch(err => this.setState({ error: err.message }));
  // };


  render() {
    return (
    <div>

      <div class="row">
        <div class="col-sm-12">
          <br/>

          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            </div>
            <div class="panel-body">

              <form role="form">

                <div class="form-group">
                  <label for="search">Search Term:</label>
                  <input type="text" class="form-control" id="search-term"/>
                </div>

                <div class="form-group">
                  <label for="num-records-select">Number of Records to Retrieve:</label>
                  <select class="form-control" id="num-records-select">
                    <option value="1">1</option>

                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="start-year">Start Year (Optional):</label>
                  <input type="text" class="form-control" id="start-year"/>
                </div>

                <div class="form-group">
                  <label for="end-year">End Year (Optional):</label>
                  <input type="text" class="form-control" id="end-year"/>
                </div>

                <button type="submit" class="btn btn-default" id="run-search" onClick={this.runSearch} ><i class="fa fa-search"></i> Search</button>
                <button type="button" class="btn btn-default" id="clear-all" onClick={this.clear}><i class="fa fa-trash"></i> Clear Results</button>

              </form>
            </div>
          </div>
        </div>
      </div>
          <div class="row">
          <div class="col-sm-12">
            <br/>
    
            <div class="panel panel-primary">
    
              <div class="panel-heading">
                <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Top Articles</strong></h3>
              </div>
    
              <div class="panel-body" id="well-section">
              </div>
            </div>
          </div>
        </div>

    </div>
    );
  }
}

export default Admin;
