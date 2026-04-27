import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', senha: '', nome: '', sobrenome: '', dataNascimento: '', mensagem: '', status: '' };
    this.cadastrar = this.cadastrar.bind(this);
  }

  async cadastrar() {
    const { email, senha, nome, sobrenome, dataNascimento } = this.state;
    
    try {
      // 1. Cria usuário no Auth
      const retornoAuth = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      
      // 2. Grava os dados adicionais no Firestore usando o UID gerado
      await firebase.firestore().collection('usuarios').doc(retornoAuth.user.uid).set({
        uid: retornoAuth.user.uid, // O professor pediu para trazer o UID para os atributos!
        nome: nome,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento
      });

      this.setState({ mensagem: 'Cadastrado com sucesso! Vá para o Login.', status: 'sucesso' });
    } catch (error) {
      this.setState({ mensagem: 'Erro ao cadastrar: ' + error.message, status: 'erro' });
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="login-box" style={{maxWidth: '450px'}}>
          <h1>Cadastro</h1>
          <div className="input-group">
            <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} />
          </div>
          <div className="input-group">
            <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({ dataNascimento: e.target.value })} />
          </div>
          <div className="input-group">
            <input type="email" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} />
          </div>
          <button onClick={this.cadastrar}>Cadastrar Usuário</button>
          
          <div style={{marginTop: '15px'}}>
             <Link style={{color: '#a0a0a0'}} to="/">Voltar para Login</Link>
          </div>

          <div className={`mensagem ${this.state.status}`}>{this.state.mensagem}</div>
        </div>
      </div>
    );
  }
}
export default Cadastro;