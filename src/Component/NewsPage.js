import React from "react";
import NewsListItem from "./NewsListItem";
import Header from "./Header";
const API_URL="https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-27&sortBy=publishedAt&apiKey=cd1f6c886ee54cc9b87d0b9a49a72386"

class NewsPage extends React.Component{
    state = {
        articles:[]
    }
    componentDidMount(){
        fetch(API_URL)
        .then(data=>data.json())
        .then(result=>this.setState({articles:result.articles}))
        .catch(e=>console.log(e));
    }
 
    render(){
       let newsList=this.state.articles.map(article=>(
           <NewsListItem
           newsDiscription={article.description}
           newsTitle={article.Title}
           Author={article.Author}
           thumbnail={article.urlToImage}/>
       ));
        // console.log("render articles state",this.state.articles);
        // console.log(newsList);
        return(
            <div>
            <Header />
          {newsList}
             </div>
        );
    };
};
export default NewsPage;
