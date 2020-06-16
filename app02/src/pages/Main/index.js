import React, { Component } from 'react';
import api from '../../services/api';
import moment from 'moment';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../Components/CompareList';



export default class Main extends Component {

  state = {
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault(); // tira o carregamento padrão da pagina

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow(); // formatando data

      this.setState({
        repositoryInput: '',
        repositoryError: false,
        repositories: [...this.state.repositories, repository] // [ ... copia dos dados antigos, adicionando os novos dados] spread operator
      })
    } catch (e) {
      this.setState({repositoryError: true});
    }
}

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
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
