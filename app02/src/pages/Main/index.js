import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../Components/CompareList';



export default class Main extends Component {

  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault(); // tira o carregamento padrão da pagina

    try {
      const reponse = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, reponse.data] // [ ... copia dos dados antigos, adicionando os novos dados] spread operator
      })
    } catch (e) {
      console.log(e);
    }
}

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input type="text" placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({repositoryInput: e.target.value})}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories}/>
      </Container>
    );
  }
}



//stateless
// const Main = () => (
//   <Container>
//     <img src={logo} alt="Github Compare" />

//     <Form>
//       <input type="text" placeholder="usuário/repositório" />
//       <button type="submit">OK</button>
//     </Form>

//     <CompareList />
//   </Container>


// );

// export default Main;
