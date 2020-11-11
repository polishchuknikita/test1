import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import News from './components/Pages/News/News';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';

const App = props => {
  console.log(props.users)
  return (
    <div className="App">
      <Header />
      <Route
        path="/"
        exact
        component={ () => <Main />}
      />
      <Route
        path="/News"
        exact
        component={() => <News />}
      />
      <Route
        path="/"
        exact
        component={Login}
      />
    </div>
  );
}


const addNewsAction = {
  type: 'ADD_NEWS',
  visible: 'wait'
}

const addNewUser = {
  type: 'ADD_USER',
  position: 'user'
}

const checkLoginUser = {
  type: 'CHECK_USER',
  check: true
}

const mapStateNews = state => {
  return {
      news: state.news,
      users: state.users
  }
}

const mapDispatchNews = dispatch => {
  return {
    addNews: () => dispatch(addNewsAction),
    addUser: () => dispatch(addNewUser),
    checkUser: () => dispatch(checkLoginUser)
  }
}

export default connect(mapStateNews, mapDispatchNews)(App);
