import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css';

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', sobrenome: '', dataNascimento: '', carregando: true };
  }

  async componentDidMount() {
    // Verifica quem é o usuário logado atualmente
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // Se tem usuário, busca os dados dele no Firestore pelo UID
        const documento = await firebase.firestore().collection('usuarios').doc(user.uid).get();
        if (documento.exists) {
          this.setState({
            nome: documento.data().nome,
            sobrenome: documento.data().sobrenome,
            dataNascimento: documento.data().dataNascimento,
            carregando: false
          });
        }
      } else {
        // Se não tem ninguém logado, chuta de volta pro login
        this.props.history.push('/');
      }
    });
  }

  deslogar = async () => {
    await firebase.auth().signOut();
    this.props.history.push('/');
  }

  render() {
    if (this.state.carregando) {
      return <div className="app-container"><h2 style={{color: 'white'}}>Carregando seus dados...</h2></div>;
    }

    return (
      <div className="app-container">
        <div className="login-box" style={{maxWidth: '500px'}}>
          <h1>Painel Principal</h1>
          <div style={{textAlign: 'left', color: 'white', fontSize: '18px', marginBottom: '20px'}}>
            <p><strong>Nome:</strong> {this.state.nome}</p>
            <p><strong>Sobrenome:</strong> {this.state.sobrenome}</p>
            <p><strong>Nascimento:</strong> {this.state.dataNascimento}</p>
          </div>
          <button style={{backgroundColor: '#d63031'}} onClick={this.deslogar}>Sair da Conta</button>
        </div>
      </div>
    );
  }
}
export default Principal;