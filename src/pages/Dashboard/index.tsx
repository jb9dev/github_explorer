import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepository, setNewRepository] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>):
    Promise<void> {
      event.preventDefault();
      const response = await api.get<Repository>(`/repos/${newRepository}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepository('');
    }

  return (
    <React.Fragment>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepository}
          onChange={({target}) => setNewRepository(target.value)}
          placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
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
