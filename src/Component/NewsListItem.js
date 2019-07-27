import React from "react";
import "./Stylecss/newslistStyle.css";
const NewsListItem =(props)=>{
    return(
       <div className="newsParent">
           <div className="newsImage">
            <img src={props.thumbnail} 
            width="125px"
            height="125" />
            </div>
           <div className="textWrapper">
            <p className="newsTitle">{props.newsTitle}</p>

            <p className="newsDiscription">{props.newsDiscription}</p><br></br>
            <p className="newsAuthor">{props.Author}</p>
            </div>
            </div>
    );
};
export default  NewsListItem ;