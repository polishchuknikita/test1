import React from 'react';

const NewsItem = props => {
    return (
        <div className="news-list__item">
              <h4 className="news-list__title">
                {props.title}
            </h4>
            <p className="news-list__desc">
                {props.desc}
            </p>
            <span className="news-list__date">
                {props.date}
            </span>
        </div>
    )
}

export default NewsItem;