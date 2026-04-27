# 🚀 Sistema de Cadastro e Login com React + Firebase

Este projeto é uma aplicação web completa desenvolvida como parte da Atividade Somativa da disciplina de **Tecnologias para Desenvolvimento Web**. A aplicação utiliza React para o frontend e a plataforma Firebase para autenticação e persistência de dados.

## 📋 Sobre o Projeto

O objetivo do projeto foi construir uma aplicação "Fullstack" capaz de gerenciar usuários, permitindo o cadastro, a autenticação e a exibição de dados personalizados vindos de um banco de dados NoSQL.

### As 3 Páginas do Sistema:
1. **Página de Cadastro:** Solicita E-mail, Senha, Nome, Sobrenome e Data de Nascimento. Cria o acesso no *Firebase Authentication* e salva os dados complementares no *Firestore Database*.
2. **Página de Login:** Valida as credenciais (E-mail/Senha) diretamente no *Firebase Auth*.
3. **Página Principal (Dashboard):** Área restrita que recupera e exibe o nome e os dados do usuário logado em tempo real a partir do Firestore.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** [React](https://reactjs.org/) (Componentes em classe e Gerenciamento de Estado).
- **Roteamento:** [React Router Dom v5](https://v5.reactrouter.com/) (Navegação SPA).
- **Backend as a Service:** [Firebase](https://firebase.google.com/) (v8).
  - **Authentication:** Provedor de E-mail/Senha.
  - **Firestore Database:** Banco de Dados NoSQL para dados de perfil.
- **Estilização:** CSS3 com foco em **Dark Mode** e design responsivo.
- **Hospedagem/Deploy:** [Netlify](https://www.netlify.com/).

## ⚙️ Como executar o projeto

Para rodar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/NicolasM3deiros/SEU_REPOSITORIO.git](https://github.com/NicolasM3deiros/SEU_REPOSITORIO.git)


2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure o Firebase::**
Crie um arquivo src/firebase.js e adicione as suas chaves de configuração do Firebase:

   ```JavaScript
    const firebaseConfig = {
      apiKey: "SUA_API_KEY_AQUI",
      authDomain: "seu-projeto.firebaseapp.com",
      projectId: "seu-projeto",
      storageBucket: "seu-projeto.firebasestorage.app",
      messagingSenderId: "123456789",
      appId: "1:123456789:web:abcdef123456"
    };
   

2. ** Inicie a aplicação:**
    ```Bash
   npm start

🌐 Deploy
A aplicação está disponível online através do Netlify.
🔗 CLIQUE AQUI PARA ACESSAR O SITE

Desenvolvido por Nicolas Alcides Laranjeira Medeiros 🎓
