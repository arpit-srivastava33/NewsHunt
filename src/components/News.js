import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const [item, setItem] = useState([]);
    const [isloaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalArticles] = useState(0);


   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f6622ba61eef4ea080b528ad896e1750&page=${page}&pageSize=5`


    const fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f6622ba61eef4ea080b528ad896e1750&page=${page}&pageSize=5`
        try {
            setIsLoaded(true)
            const data = await fetch(url);
            const parsedData = await data.json();
            setIsLoaded(false)
            setItem(parsedData.articles);
            setTotalArticles(parsedData.totalResults);
        } catch (error) {
            console.log("error", error);
        }
    };


    useEffect(() => {
        fetchData();
    },[])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f6622ba61eef4ea080b528ad896e1750&page=${page+1}&pageSize=5`
        setPage(page+1);
        const data = await fetch(url);
        const parsedData = await data.json();
        setItem(item.concat(parsedData.articles));
        setTotalArticles(parsedData.totalResults);
     };

    return (<>
            <h1 className="text-center" style={{ margin: "30px" }}>NewsHunt Daily Headlines</h1>
            {isloaded && <Spinner/>}
            <InfiniteScroll
                dataLength={item.length}
                next={fetchMoreData}
                hasMore={item.length!==totalArticles}
                loader={<Spinner />}
            >
                <div className="container">
                <div className="row">
                    {item.map((element,i) => {
                        return <div className="col-md-4" key={i}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                </>
    )
}

News.prototype = {
    category: PropTypes.string
}
News.defaultProps = {
    category: "general"
}
