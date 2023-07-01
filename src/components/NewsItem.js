import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="my-3">
            <div className="card" >
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
                        {props.source}
                    </span>
                <img src={!props.imageUrl ? "http://cdn.wionews.com/sites/default/files/2023/06/30/363366-indian-ocean.jpeg" : props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small>By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
