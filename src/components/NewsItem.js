import React from 'react'

const NewsItem=(props)=>{



    let { title, description, urltoimage ,newsurl,author,date,source} = props

    return (

      <div className="card" >
        
        <img src={urltoimage} className="card-img-top" alt="..." />
        <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }
          }>
            <span className=" badge rounded-pill bg-danger"  >{source}</span>
          </div>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {date}</small></p>
          <a href={newsurl} target="blank" className="btn  btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )

  }
  export default NewsItem



