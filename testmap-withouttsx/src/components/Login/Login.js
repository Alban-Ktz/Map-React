import React from 'react';
import logoGraouly from './img/logo-graouly.png'
import './Login.css'

export default function Login() {
  return(
      <div className='formulaire'>
          <div className="image">
            <img src={logoGraouly} />
          </div>
            
        <form className='login-tout'>
        <label className='login pseudo'>
            <p>Pseudonyme</p>
            <input type="text" />
        </label>
        <label className='login password'>
            <p>Mot de passe </p>
            <input type="password" />
        </label>
        <div>
            <button type="submit">Se Connecter</button>
        </div>
        </form>
    </div>
  )
}
