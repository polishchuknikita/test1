import React from 'react';
import {connect} from 'react-redux';
import './Main.css';

const Main = props => {
    let who = 'Гость';
    let position = 'guest';

    props.users.map(item => {
        if (item.check == true) {
            who = item.login;
            position = item.position;
        } 
        return item;
    })

    return (
        <section className="main-section">
            <div className="container">
                <div className="offer">
                    <p className="offer__text">
                        Привет {who}, вы являетесь {position} на даном сайте!
                    </p>
                </div>
            </div>
        </section>
    )
}


const mapStateNews = state => {
    return {
        news: state.news,
        users: state.users
    }
  }
  
export default connect(mapStateNews)(Main);