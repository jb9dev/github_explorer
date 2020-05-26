import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Message } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface ShowMessage {
  message: string;
  status: string;
  autoRemove: boolean;
}

const Dashboard: React.FC = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [githubUser, setGithubUser] = useState('');
  const [repositoryName, setRepositoryName] = useState('');
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  useEffect(() => {
    if (githubUser.length > 3 && repositoryName.length > 3) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }, [disableSubmit, githubUser, repositoryName])

  function showMessage({ message, status, autoRemove }: ShowMessage) {
    setMessage(message);
    setMessageClass(status);
    if (autoRemove) {
      setTimeout(() => {
        setMessageClass(`${status} remove-message`);
      }, 2700)
    }
  }

  function clearMessage() {

    setTimeout(() => {
      setMessage('');
      setMessageClass('');
    }, 3500)
  }

  function clearForm() {
    setRepositoryName('');
    setGithubUser('');
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
          message: 'Repositório adicionado com sucesso ao final da lista!',
          status: 'success',
          autoRemove: true
        });
        clearMessage();
      } catch {
        showMessage({
          message: 'Repositório não encontrado. Por favor revise os nomes preenchidos',
          status: 'error',
          autoRemove: false
        });
      }

    }

  return (
    <React.Fragment>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          name="githubUser"
          autoFocus={true}
          value={githubUser}
          onChange={({target}) => setGithubUser(target.value)}
          placeholder="Usuário no Github" />
        <span className='bar-disableSubmitseparator'>/</span>
        <input
          name="githubRepository"
          value={repositoryName}
          onChange={({target}) => setRepositoryName(target.value)}
          placeholder="Nome do repositório" />
        <button disabled={disableSubmit} type="submit">Pesquisar</button>
      </Form>
      <Message className={messageClass}>{message}</Message>
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
