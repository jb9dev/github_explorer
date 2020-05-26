import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <Link className="repository" to="/repository">
        <img
          className="repository__image"
          src="https://avatars2.githubusercontent.com/u/36506383?s=460&u=32afcf722c7e5775b96549d65ba7f64e28b406d0&v=4"
          alt="Foto do perfil no Github"
        />
        <div className="repository__wrapper">
          <strong className="repository__title">
            Jean-Barbosa-9/Github-Explore
          </strong>
          <p className="repository__description">
            Esse é um projeto que é feito no bootcamp da Rocketseat para fazer
            uma introdução ao React. Aqui inicialmente o projeto está sendo
            feito da mesma forma como é apresentado no treinamento, mas
            futuramente implementarei mais funcionalidades que sejam
            interessantes e pertinentes à ideia.
          </p>
        </div>
        <FiChevronRight className="repository__icon" size={20} />
      </Link>
      <Link className="repository" to="/repository">
        <img
          className="repository__image"
          src="https://avatars2.githubusercontent.com/u/36506383?s=460&u=32afcf722c7e5775b96549d65ba7f64e28b406d0&v=4"
          alt="Foto do perfil no Github"
        />
        <div className="repository__wrapper">
          <strong className="repository__title">
            Jean-Barbosa-9/Github-Explore
          </strong>
          <p className="repository__description">
            Esse é um projeto que é feito no bootcamp da Rocketseat para fazer
            uma introdução ao React. Aqui inicialmente o projeto está sendo
            feito da mesma forma como é apresentado no treinamento, mas
            futuramente implementarei mais funcionalidades que sejam
            interessantes e pertinentes à ideia.
          </p>
        </div>
        <FiChevronRight className="repository__icon" size={20} />
      </Link>
      <Link className="repository" to="/repository">
        <img
          className="repository__image"
          src="https://avatars2.githubusercontent.com/u/36506383?s=460&u=32afcf722c7e5775b96549d65ba7f64e28b406d0&v=4"
          alt="Foto do perfil no Github"
        />
        <div className="repository__wrapper">
          <strong className="repository__title">
            Jean-Barbosa-9/Github-Explore
          </strong>
          <p className="repository__description">
            Esse é um projeto que é feito no bootcamp da Rocketseat para fazer
            uma introdução ao React. Aqui inicialmente o projeto está sendo
            feito da mesma forma como é apresentado no treinamento, mas
            futuramente implementarei mais funcionalidades que sejam
            interessantes e pertinentes à ideia.
          </p>
        </div>
        <FiChevronRight className="repository__icon" size={20} />
      </Link>
    </Repositories>
  </>
);

export default Dashboard;
