import React from 'react';
import './profile.css';

class Profile extends React.Component {
    render() {
        return (
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
       )
    }
}

export default Profile;