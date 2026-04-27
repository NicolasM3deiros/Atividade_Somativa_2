import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css'; 

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', senha: '', mensagem: '', status: '' };
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    const { email, senha } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, senha);
      // Se deu certo, o Firebase logou. Vamos mandar o usuário para a Principal!
      this.props.history.push('/principal');
    } catch (error) {
      this.setState({ mensagem: 'Usuário não cadastrado ou senha inválida!', status: 'erro' });
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="login-box">
          <h1>Login</h1>
          <div className="input-group">
            <label>E-mail</label>
            <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
          </div>
          <button onClick={this.acessar}>Acessar</button>
          
          <div style={{marginTop: '15px'}}>
             <Link style={{color: '#a0a0a0'}} to="/cadastro">Não tem conta? Cadastre-se</Link>
          </div>

          <div className={`mensagem ${this.state.status}`}>{this.state.mensagem}</div>
        </div>
      </div>
    );
  }
}
export default Login;