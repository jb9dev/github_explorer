import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';
interface RouteParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  return (
    <React.Fragment>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/" className="go-back">
          <FiChevronLeft size={14} className="go-back__icon" />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <div className="repository-info-header">
          <img className="repository-info-header__avatar" src="https://avatars0.githubusercontent.com/u/36506383?v=4" alt="Jean-Barbosa9" />
          <div className="repository-info-header__wrapper">
            <h1 className="repository-info-header__title">
              {params.repository}
            </h1>
            <p className="repository-info-header__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint beatae natus iste animi tempore commodi deserunt, molestiae vero. Facilis quidem distinctio magni, quia aperiam, iusto tenetur iste quo iure in corrupti eos qui velit perspiciatis sit? Deserunt, debitis quas, voluptatem at natus a incidunt neque sequi, iusto doloremque porro! Laboriosam.
            </p>
          </div>
        </div>
        <ul className="repository-info-statistics">
          <li className="repository-info-statistics__item">
            <strong className="repository-info-statistics__value">
              1808
            </strong>
            <span className="repository-info-statistics__label">
              Stars
            </span>
          </li>
          <li className="repository-info-statistics__item">
            <strong className="repository-info-statistics__value">
              48
            </strong>
            <span className="repository-info-statistics__label">
              Forks
            </span>
          </li>
          <li className="repository-info-statistics__item">
            <strong className="repository-info-statistics__value">
              67
            </strong>
            <span className="repository-info-statistics__label">
              Issues abertas
            </span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link
          className="issues"
          to={`/repositories/repository_full_name`}
        >
          <div className="issues__wrapper">
            <strong className="issues__title">
              repository_full_name
            </strong>
            <p className="issues__description">
              repository_description
            </p>
          </div>
          <FiChevronRight className="issues__icon" size={20} />
        </Link>
      </Issues>
    </React.Fragment>
  )
};

export default Repository;
