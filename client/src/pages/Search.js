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
  //     $articleList.addclassName("list-group");

  //     // Add the newly created element to the DOM
  //     $("#article-section").append($articleList);

  //     // If the article has a headline, log and append to $articleList
  //     var headline = article.headline;
  //     var $articleListItem = "<li className='list-group-item articleHeadline'>";

  //     if (headline && headline.main) {
  //       console.log(headline.main);
  //       $articleListItem.append(
  //         "<span className='label label-primary'>" +
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

  searchArticle = () => {
    const apiKey ="d0254c65766f4633a68e2a83973f20e6";
    const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + this.state.searchTerm + "&begin_date=" + this.state.startYear + "0101&end_date=" + this.state.endYear + "0101";

    console.log(this.state);

    return axios.get(queryUrl).then((res) =>{
      console.log(res);
      this.setState({articles: res.data.response.docs});
    });
  }

  handleSubmit = (event) =>{
      event.preventDefault();
      this.searchArticle();
  }




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

      <div className="row">
        <div className="col-sm-12">
          <br/>

          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
            </div>
            <div className="panel-body">

              <form>

                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input type="text" className="form-control" id="search-term" name="searchTerm" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="num-records-select">Number of Records to Retrieve(1-10):</label>
                  <input type="text" className="form-control" id="num-articles" name="numArticles" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="start-year">Start Year:</label>
                  <input type="text" className="form-control" id="start-year" name="startYear" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="end-year">End Year:</label>
                  <input type="text" className="form-control" id="end-year" name="endYear" onChange={this.handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-default" id="run-search" onClick={this.handleSubmit} ><i className="fa fa-search"></i> Search</button>
                <p></p>
                <button type="button" className="btn btn-default" id="clear-all" onClick={this.clear}><i className="fa fa-trash"></i> Clear Results</button>

              </form>
            </div>
          </div>
        </div>
      </div>
          <div className="row">
          <div className="col-sm-12">
            <br/>
    
            <div className="panel panel-primary">
    
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
              </div>
    
              <div className="panel-body" id="well-section">
              </div>
            </div>
          </div>
        </div>

    </div>
    );
  }
}

export default Admin;
