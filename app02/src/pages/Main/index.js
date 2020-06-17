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
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  handleAddRepository = async (e) => {
    e.preventDefault(); // tira o carregamento padrão da pagina

    this.setState({ loading: true});

    const { repositoryInput, repositories } = this.state;

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow(); // formatando data

      this.setState({
        repositoryInput: '', //setando o vazio na variavel
        repositoryError: false,
        repositories: [...repositories, repository] // [ ... copia dos dados antigos, adicionando os novos dados] spread operator
      });

      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem('@lucas:repositories', JSON.stringify([...localRepositories, repository])
      );
    } catch (e) {
      this.setState({repositoryError: true});
    }finally{ // executa sendo true or false
      this.setState({ loading: false});
    }
}

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('@lucas:repositories')) || [];

  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;

    const updatedRepositories = repositories.filter(repository => repository.id !== id);

    this.setState({ repositories: updatedRepositories});

    await localStorage.setItem('@lucas:repositories', JSON.stringify(updatedRepositories));
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;

    const repository = repositories.find(repo => repo.id === id);

    try{
      const {data} = await api.get(`/repos/${repository.full_name}`);

      data.last_commit = moment(data.puhed_at).fromNow(); //configurando a data

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map( repo => (repo.id === data.id ? data : repo)),
      });

      await localStorage.setItem('@lucas:repositories', JSON.stringify(repositories));
    } catch (e) {
      this.setState({ repositoryError: true});
    }
  };

  render() {
    const {
      repositories, repositoryInput, repositoryError, loading
    } = this.state;

    return (
      <Container>
            <img src={logo} alt="Github Compare" />
            {/* verificando se existe algum erro no formulário para dar um aviso withError */}
            <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
              <input
                type="text"
                placeholder="usuário/repositório"
                value={this.state.repositoryInput}
                onChange={e => this.setState({repositoryInput: e.target.value})}
              />
              <button type="submit">
                {this.state.loading ? <i className="fa fa-spinner fa-pulse"/> : 'OK' }
              </button>
            </Form>

            <CompareList
                repositories={repositories}
                removeRepository={this.handleRemoveRepository}
                updateRepository={this.handleUpdateRepository}
            />

    </Container>
    );
  }
}

