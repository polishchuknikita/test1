import React, {useState} from 'react';
import {connect} from 'react-redux';
import './Login.css';

const Login = (props) => {
    let classNameModal = 'disable';
    if(props.staticModal == true) {
        classNameModal = 'enable'
    } else {
        classNameModal = 'disable';
    }

    const [loginInfo, setLoginInfo] = useState('');
    const [passInfo, setPassInfo] = useState('');

    const loginChange = event => {
        setLoginInfo(event.target.value);
    }
    const passChange = event => {
        setPassInfo(event.target.value)
    }

    props.users.map(item => {
        if (item.login == loginInfo && item.pass == passInfo) {
            return item.check = true
        } else {
            return item.check = false
        }
    })
    
    return (
        <div className={`modal ${classNameModal}`}>
            <div 
                className="modal-overlay"
                onClick={props.closeModal}
            ></div>
            <div className="modal-body">
                <span 
                    className="modal-close"
                    onClick={props.closeModal}
                >
                    x
                </span>
                <form className="login-form">
                    <h3 className="login-form__title">
                        Заполните форму
                    </h3>
                    <div className="login-form__input-wrap">
                        <p className="login-form__input-text">
                            Login
                        </p>
                        <input 
                        type="text"
                        name="login"
                        placeholder="Введите login"
                        className="login-form__input"
                        onChange={loginChange}
                    />
                    </div>
                    <div className="login-form__input-wrap">
                        <p className="login-form__input-text">
                            Pass
                        </p>
                        <input 
                            type="text"
                            name="pass"
                            placeholder="Введите password"
                            className="login-form__input"
                            onChange={passChange}
                        />
                    </div>
                    <input 
                        type="button" 
                        value="Отправить" 
                        className="login-form__btn"
                        onClick={props.closeModal}
                    />
                </form>
            </div>
        </div>
    )
}

  
const addNewUser = {
    type: 'ADD_USER',
    position: 'user'
}
  
  
const mapStateNews = state => {
    return {
        news: state.news,
        users: state.users
    }
}
  
const mapDispatchNews = dispatch => {
    return {
        addUser: () => dispatch(addNewUser)
    }
}
  
export default connect(mapStateNews, mapDispatchNews)(Login);
