import './Register.css';
import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';


class Register extends React.Component{

constructor(props) {
  super(props);
  this.state ={
    name: '',
    surname:'',
    email:'',
    password:'',
    passwordConform:'',
  };

  this.onChangeName= this.onChangeName.bind(this);
  this.onChangeEmail= this.onChangeEmail.bind(this);
  this.onChangeSurname= this.onChangeSurname.bind(this);
  this.onChangePassword= this.onChangePassword.bind(this);
  this.onChangePasswordconform= this.onChangePasswordconform.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  
}

onChangeName(e){
  this.setState({
    name:e.target.value
  });
}

onChangeEmail(e){
  this.setState({
    email:e.target.value
  });
}

onChangeSurname(e){
  this.setState({
    surname:e.target.value
  });
}

onChangePassword(e){
  this.setState({
    password:e.target.value
  });
}

onChangePasswordconform(e){
  this.setState({
    passwordConform:e.target.value
  });
}

Hashage(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
}

checkSamePassword(){
  let msgerror ='';

  if (this.state.password != this.state.passwordConform) {
    msgerror += 'Vous devez faire correspondre les mots de passes';
  }
  return msgerror;
}

CheckPassword(){
  let msgerror ='';
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  if (!(PWD_REGEX.test(this.state.password))) {
    msgerror = '4 à 24 caractère attendue ainsi que des majuscules,des nombres et un caractère spécial !@#$%';
  }
  return msgerror;
}

CheckEmail(){
  let msgerror ='';
  const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!(EMAIL_REGEX.test(this.state.email))) {
    msgerror = 'Veuillez saisir une Email valide';
  }
  return msgerror;

}

onSubmit(e){
  e.preventDefault();
  if (this.CheckEmail() === '' && this.CheckPassword() === '' && this.checkSamePassword() === ''){
    console.log('enfin')
    const obj={
      name:this.state.name,
      email:this.state.email,
      surname:this.state.surname,
      password:this.Hashage(this.state.password),
      passwordConform:this.state.passwordConform,
    };
    axios.post('http://localhost/reactProject/insert.php',obj)
      .then(res=> console.log(res.data))
      .catch(error => {
      console.log(error.response)
    });

    this.setState({
      name:'',
      email:'',
      surname:'',
      password:'',
      passwordConform:'',

    })
  }
}
render(){
  let errorsamePwd=this.checkSamePassword();
  let errorPwd = this.CheckPassword();
  let errorEmail = this.CheckEmail();
  return (
    <div className="formulaire">
      <h1 className="Titre">Cree Votre Compte</h1>
      <form onSubmit={this.onSubmit}>
        <div>
        <label className='titre'>
          Nom
          </label>
          <input type="text" value={this.state.value} onChange={this.onChangeName} className="textfield"/>
        </div>

        <div>
          <label className='titre'>
          Prenom:
        </label>
          <input type="text" value={this.state.value} onChange={this.onChangeSurname} className="textfield"/>
          </div>

        <div>
        <label className='titre'>
          Email:
        </label>
          <input  type="text" value={this.state.value} onChange={this.onChangeEmail} className="textfield"/>
          <p className={errorEmail == '' ? "hide": "errmsg" }>{errorEmail}</p>
        </div>

        <div>
        <label className='titre'>
          Mot de passe:
        </label>
          <input  type="text" value={this.state.value} onChange={this.onChangePassword} className="textfield"/>
          <p className={errorPwd == '' ? "hide": "errmsg" }>{errorPwd}</p>
        </div>

        <div>
        <label className='titre'>
          Confirmation mot de passe:
        </label>
          <input  type="text" value={this.state.value} onChange={this.onChangePasswordconform} className="textfield"/>
          <p className={errorsamePwd == '' ? "hide": "errmsg" }>{errorsamePwd}</p>
        </div>
        <input type="submit" value="Valider"/>
      </form>
    </div>
  );
}
}


export default Register ;