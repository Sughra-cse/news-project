import React from "react";
import "./Stylecss/newslistStyle.css";
const NewsListItem =()=>{
    return(
       <div className="newsParent">
           <div className="newsImage">
            <img src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="125px"
            height="125" />
            </div>
           <div className="textWrapper">
            <p className="newsTitle">"Iranian officials say 17 alleged U.S. spies captured, some sentenced to death"
</p>
            <p className="newsDiscription">"Iranian intelligence officials say 17 people have been captured who were allegedly spies working for the U.S. Central Intelligence agency."</p>
            <p className="newsAuthor">"Ali Arouzi, Linda Givetash"</p>
            </div>
            </div>
    );
};
export default  NewsListItem ;