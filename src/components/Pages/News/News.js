import React, {useState} from 'react';
import './News.css';
import NewsItem from './NewsItem';
import {connect} from 'react-redux';

const News = props => {

    let allNews = props.news.map((item, index) => {
        if(props.news.find(item => item.position == 'admin')) {
            return (
                    <NewsItem 
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    date={item.date}
                />
            )
        }
        if(props.news.find(item => item.position == 'user')) {
            if(props.news.find(item => item.visible == 'true' && item.visible == 'wait')) {
                return (
                    <NewsItem 
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        date={item.date}
                    />
                )
            }
        } else {
            if(props.news.find(item => item.visible == 'true')) {
                return (
                    <NewsItem 
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        date={item.date}
                    />
                )
            }
        }
    })

    
    const [titleNews, setTitleNews] = useState('');
    const [descNews, setDescNews] = useState('');

    let descTest = titleNews;
    let titleTest = descNews;
    const titleNewsAdd = event => {
        titleTest = event.target.value;
    }
    const descNewsAdd = event => {
        descTest = event.target.value;
    }

    const newNews = (title, desc) => {
        setTitleNews(title);
        setDescNews(desc)
    }

    
    
    return (
        <section className="news-section">
            <div className="container">
                <div className="news-wrap">
                    <div className="news-search">
                        <input 
                            placeholder="Поиск"
                            className="news-search__input" 
                        />
                    </div>
                    <div className="news-list">
                        {allNews}
                    </div>
                </div>
                <form className="form-add">
                    <h3 className="form-add__title">
                        Добавьте свою новость
                    </h3>
                    <input 
                        type="text"
                        placeholder="Введите название новости"
                        className="form-add__input form-add__input_title"
                        onChange={titleNewsAdd}
                    />
                    <textarea 
                        placeholder="Введите текст новости"
                        className="form-add__input form-add__input_desc"
                        onChange={descNewsAdd}
                    />
                    <button 
                        type="button"
                        className="form-add__input form-add__input_btn"
                        // onClick={newNews(titleTest, descTest)}
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    )
}
 
const addNewUser = {
    type: 'ADD_USER',
    position: 'user'
}

const mapStateNews = state => {
    return state = {
        news: state.news,
        users: state.users
    }
}

const mapDispatchNews = dispatch => {
    return {
        addNews: (newsTitle, newsDesc) => {
            dispatch({
                type: 'ADD_NEWS',
                title: newsTitle,
                desc: newsDesc,
                date: 'тут можно задать дату',
                visible: 'wait'
            })
        },
        addUser: () => dispatch(addNewUser)
    }
  }
  
export default connect(mapStateNews, mapDispatchNews)(News);
