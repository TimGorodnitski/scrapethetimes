import React from "react";
import axios from "axios";
import Result from "../components/Result";

class Admin extends React.Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    articles: []
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  searchArticle = (event) => {      
    event.preventDefault();
    const apiKey ="d0254c65766f4633a68e2a83973f20e6";
    const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + this.state.searchTerm + "&begin_date=" + this.state.startYear + "0101&end_date=" + this.state.endYear + "0101";

    return axios.get(queryUrl).then((res) =>{
      console.log(res);
      this.setState({articles: res.data.response.docs});
    });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
  }

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
                  <label htmlFor="start-year">Start Year:</label>
                  <input type="text" className="form-control" id="start-year" name="startYear" onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="end-year">End Year:</label>
                  <input type="text" className="form-control" id="end-year" name="endYear" onChange={this.handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-default" id="run-search" onClick={this.searchArticle} ><i className="fa fa-search"></i> Search</button>
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
              <Result
                articles={this.state.articles}
                handleSaveArticle={this.handleSaveArticle}
              />
            </div>
          </div>
          <hr></hr>
          <div className="panel panel-primary">
            
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Saved Articles</strong></h3>
            </div>

            <div className="panel-body" id="well-section">
              {/* <Saved /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Admin;
