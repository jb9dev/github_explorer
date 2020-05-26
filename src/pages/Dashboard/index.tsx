import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, ClearRepositories, Message } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface ShowMessage {
  text: string;
  status: string;
  autoRemove: boolean;
}

const Dashboard: React.FC = () => {
  const messageInitialState = { text: '', status: '', autoRemove: true };

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const localRepositoriesStoraged = localStorage.getItem(
      '@GithubExplore:repositories'
    );
    if (localRepositoriesStoraged) {
      return JSON.parse(localRepositoriesStoraged);
    } else {
      return []
    }
  });
  const [githubUser, setGithubUser] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [message, setMessage] = useState(messageInitialState);
  const [messageClass, setMessageClass] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplore:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories])

  useEffect(() => {
    if (githubUser.length > 2 && repositoryName.length > 2) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }, [disableSubmit, githubUser, repositoryName])

  function showMessage({ text, status, autoRemove }: ShowMessage) {
    setMessage({ text, status, autoRemove });
    setMessageClass(status);
    if (autoRemove) {
      setTimeout(() => {
        setMessageClass(`${status} remove-message`);
      }, 2700)
    }
  }

  function clearMessage() {

    setTimeout(() => {
      setMessage(messageInitialState);
    }, 3500)
  }

  function clearForm() {
    setRepositoryName('');
    setGithubUser('');
  }

  function clearRepositories() {
    setRepositories([]);
    localStorage.setItem('@GithubExplore:repositories', JSON.stringify([]));
  }

  async function handleAddRepository(event: FormEvent<HTMLFormElement>):
    Promise<void> {
      event.preventDefault();

      try {
        const newRepository = `${githubUser}/${repositoryName}`
        const response = await api.get<Repository>(`/repos/${newRepository}`);
        const repository = response.data;

        setRepositories([...repositories, repository]);
        clearForm();
        showMessage({
          text: 'Repositório adicionado com sucesso ao final da lista!',
          status: 'success',
          autoRemove: true
        });
        clearMessage();
      } catch {
        showMessage({
          text: 'Repositório não encontrado. Por favor revise os nomes preenchidos',
          status: 'error',
          autoRemove: false
        });
      }

    }

  return (
    <React.Fragment>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form messageStatus={message.status} onSubmit={handleAddRepository}>
        <input
          name="githubUser"
          autoFocus={true}
          value={githubUser}
          onChange={({target}) => setGithubUser(target.value)}
          onBlur={clearMessage}
          placeholder="Usuário no Github" />
        <span className='bar-separator'>/</span>
        <input
          name="githubRepository"
          value={repositoryName}
          onChange={({target}) => setRepositoryName(target.value)}
          onBlur={clearMessage}
          placeholder="Nome do repositório" />
        <button disabled={disableSubmit} type="submit">Pesquisar</button>
      </Form>
      {
        repositories.length > 0
        && <ClearRepositories>
          <span className="clear" onClick={clearRepositories}>
            Limpar lista de repositórios
          </span>
        </ClearRepositories>
      }
      <Message className={messageClass}>{message.text}</Message>
      <Repositories>
      {
        repositories.map(repository => (
          <Link
            key={repository.full_name}
            className="repository"
            to="/repository"
          >
            <img
              className="repository__image"
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="repository__wrapper">
              <strong className="repository__title">
                {repository.full_name}
              </strong>
              <p className="repository__description">
                {repository.description}
              </p>
            </div>
            <FiChevronRight className="repository__icon" size={20} />
          </Link>
        ))
      }
      </Repositories>
    </React.Fragment>
  );
};

export default Dashboard;
