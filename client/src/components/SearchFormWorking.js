import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <div class="row">
    <div class="col-sm-12">
      <br/>

      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>Search Parameters</strong></h3>
        </div>
        <div class="panel-body">

          <form role="form">

            <div class="form-group">
              <label for="search">Search Term:</label>
              <input 
                type="text" 
                class="form-control" 
                id="search-term"
                name="searchTerm"
                onChange={props.handleInputChange}
              />
            </div>

            <div class="form-group">
              <label for="search">Number of Articles to Retrieve:</label>
              <input 
                type="text" 
                class="form-control" 
                id="num-articles"
                name="numArticles"
                onChange={props.handleInputChange}
              />
            </div>

            <div class="form-group">
              <label for="start-year">Start Year (Optional):</label>
              <input 
                type="text" 
                class="form-control" 
                id="start-year"
                name="startYear"
                onChange={props.handleInputChange}
              />
            </div>

            <div class="form-group">
              <label for="end-year">End Year (Optional):</label>
              <input 
                type="text"
                class="form-control" 
                id="end-year"
                name="endYear"
                onChange={props.handleInputChange}
                />
            </div>

            <button 
              type="submit"
              class="btn btn-default" 
              id="run-search" 
              onClick={props.runSearch} 
              ><i class="fa fa-search"></i>
              Search
            </button>
            <button 
              type="button" 
              class="btn btn-default" 
              id="clear-all" 
              onClick={props.clear}
              ><i class="fa fa-trash"></i>
              Clear Results
            </button>

          </form>
        </div>
      </div>
  </div>
</div>
);

export default SearchForm;
