import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../global/variables';

const { dark, dark2, green, grey, grey2, grey3, light } = colors;

export const Title = styled.h1`
  max-width: 450px;
  margin-top: 80px;
  font-size: 48px;
  color: ${dark};
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  max-width: 715px;
  margin-top: 40px;

  input,
  button {
    height: 70px;
  }

  input {
    flex: 1;
    padding: 0 24px;
    color: ${dark};
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: ${grey};
    }
  }

  button {
    width: 210px;
    color: ${light};
    font-weight: 700;
    background-color: ${green};
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background-color 250ms ease-in;

    &:hover {
      background: ${shade(0.2, green)};
    }
  }
`;

export const Repositories = styled.div`
  max-width: 715px;
  margin-top: 60px;

  .repository {
    display: flex;
    padding: 24px;
    align-items: center;
    text-decoration: none;
    background-color: ${light};
    border-radius: 5px;
    transition: transform 150ms ease-in;

    &:hover {
      transform: translateX(10px);
    }

    &:not(:first-child) {
      margin-top: 15px;
    }

    &__image {
      max-width: 50px;
      border-radius: 50%;
    }

    &__wrapper {
      margin: 0 16px;
      flex: 1;
    }

    &__title {
      font-size: 20px;
      color: ${dark2};
    }

    &__description {
      margin-top: 4px;
      font-size: 18px;
      color: ${grey2};
    }

    &__icon {
      color: ${grey3};
    }
  }
`;
