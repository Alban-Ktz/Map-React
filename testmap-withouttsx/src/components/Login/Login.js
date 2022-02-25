import React from 'react';
import logoGraouly from './img/logo-graouly.png'
import { useState } from 'react';
import './Login.css'
import { userData } from '../../data/userData';
import bcrypt from 'bcryptjs';
import { Link } from "react-router-dom"

function Login() {
    const [username, setUser] = useState('')
    const [password, setPwd] = useState('')
    const [enter, setEnter] = useState(false);

    const onChangePwd = (e) => {
        setPwd({
            password: e.target.value,
        })
    }

    const onChangeUsername = (e) => {
        setUser({
            username: e.target.value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        userData.map((data) => {
            if (bcrypt.compareSync(password.password, data.password) && username.username === data.username) {
                console.log('true');
                setEnter({
                    enter: true
                })
            }
        }
        )

    }

    return (
        <div className='formulaire'>
            <div className="loadingScreen">
                <div className="image">
                    <img src={logoGraouly} />
                </div>

                <form className='login-tout' onSubmit={onSubmit}>
                    <label className='login-pseudo'>
                        <p className='label-all'>Pseudonyme</p>
                        <input className='inputPseudo' type="text" id="email" onChange={onChangeUsername} value={username.value} required />
                    </label>
                    <label className='login-password'>
                        <p className='label-all'>Mot de passe </p>
                        <input className='inputPassword' type="password" id="password" onChange={onChangePwd} value={password.value} required />
                    </label>
                    <Link to='/MapPage'>
                        <div>
                            <button className='submitButton' type="submit">Se Connecter</button>
                        </div>
                    </Link>
                </form>
                <span className="registerLink">S'enregistrer</span>
            </div>
        </div>


    )
}

export default Login;