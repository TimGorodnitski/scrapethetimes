import React from "react";


const Result = props => (
  <ul className="list-group search-results">
    {props.articles.map(article => (
      <li id="article._id" name="result" className="well">
        <h3 className="articleHeadline">
        <strong>
          {article.headline.main}
        </strong>
        </h3>
        <h4>
          {article.pub_date}
        </h4>
        <h4>
          <a target="_blank" href={article.web_url}>{article.web_url}</a>
        </h4>
        <button type="button" className="btn btn-default" id="save" onClick={() => props.SaveArticle(article._id)}><i className="fa fa-send"></i> Save Article</button>
      </li>
    ))}
  </ul>
);



export default Result;