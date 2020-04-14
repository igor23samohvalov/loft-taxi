import React from 'react';
import Header from '../header/header.js';
import './profile.css';

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header onClick={this.props.onClick}/>
                <div className='profile-container'>
                    <div className='profile'>
                        <h1>Профиль</h1>
                        <p>Способ оплаты</p>
                        <form action='' href='#' id='profileForm'>
                            <div>
                                <label>Номер карты*</label>
                                <input type='number' placeholder='0000 0000 0000 0000'></input>
                                <label>Срок действия*</label>
                                <input type='number' placeholder='00/00'></input>
                            </div>
                            <div>
                                <label>Имя владельца*</label>
                                <input type='text' placeholder='USER NAME'></input>
                                <label>CVC*</label>
                                <input type='number' placeholder='CVC'></input>
                            </div>
                        </form>
                        <button type='submit'>Сохранить</button>
                    </div>
                </div>
            </React.Fragment>
       )
    }
}

export default Profile;