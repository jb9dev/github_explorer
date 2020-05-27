import React, { useState,  useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './style';
interface RouteParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  },
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: string;
  html_url: string;
  title: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(({data}) => {
      setRepository(data);
    });

    api.get(`/repos/${params.repository}/issues`).then(({data}) => {
      setIssues(data);
    });
  }, [params.repository])

  return (
    <React.Fragment>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/" className="go-back">
          <FiChevronLeft size={14} className="go-back__icon" />
          Voltar
        </Link>
      </Header>
      {
        repository && (
          <RepositoryInfo>
            <div className="repository-info-header">
              <img
                className="repository-info-header__avatar"
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div className="repository-info-header__wrapper">
                <h1 className="repository-info-header__title">
                  {repository.full_name}
                </h1>
                <p className="repository-info-header__description">
                  {repository.description}
                </p>
              </div>
            </div>
            <ul className="repository-info-statistics">
              <li className="repository-info-statistics__item">
                <strong className="repository-info-statistics__value">
                  {repository.stargazers_count.toLocaleString('pt-br')}
                </strong>
                <span className="repository-info-statistics__label">
                  Stars
                </span>
              </li>
              <li className="repository-info-statistics__item">
                <strong className="repository-info-statistics__value">
                  {repository.forks_count.toLocaleString('pt-br')}
                </strong>
                <span className="repository-info-statistics__label">
                  Forks
                </span>
              </li>
              <li className="repository-info-statistics__item">
                <strong className="repository-info-statistics__value">
                  {repository.open_issues_count.toLocaleString('pt-br')}
                </strong>
                <span className="repository-info-statistics__label">
                  Issues abertas
                </span>
              </li>
            </ul>
          </RepositoryInfo>
        )
      }
      <Issues>
        {issues.map(issue => (
          <a
            className="issues"
            href={issue.html_url}
            target="_blank"
          >
            <div className="issues__wrapper">
              <strong className="issues__title">
                {issue.title}
              </strong>
              <p className="issues__description">
                {issue.user.login}
              </p>
            </div>
            <FiChevronRight className="issues__icon" size={20} />
          </a>
        ))}
      </Issues>
    </React.Fragment>
  )
};

export default Repository;
