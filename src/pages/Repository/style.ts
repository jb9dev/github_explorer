import styled from 'styled-components';

import { colors } from '../../global/variables'

const { dark, dark2, dark3, grey, grey2, grey3, light } = colors;

export const Header = styled.header`
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
  align-items: center;

  .go-back {
    display: flex;
    align-items: center;
    color: ${grey};
    text-decoration: none;
    transition: color 200ms ease-in;

    &:hover {
      color: ${dark3};
    }

    &__icon {
      margin-left: 4px;
    }
  }
`;

export const RepositoryInfo = styled.div`
  .repository-info {
    &-header {
      display: flex;
      margin-bottom: 30px;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      @media (min-width: 1024px) {
        align-items: center;
      }

      &__avatar {
        width: 80px;
        margin-right: 15px;
        border-radius: 50%;

        @media (min-width: 1024px) {
          width: 120px;
        }
      }

      &__title {
        max-width: 100%;
        font-size: 28px;
        color: ${dark};

        @media (min-width: 1024px) {
          font-size: 36px;
        }
      }

      &__description {
        font-size: 14px;
        color: ${grey};

        @media (min-width: 1024px) {
          font-size: 18px;
        }
      }
    }

    &-statistics {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      @media (min-width: 1024px) {
        max-width: 50%;
      }

      &__item {
        text-align: center;
      }

      &__value, &__label {
        display: block;
      }

      &__value {
        font-size: 16px;
        color: ${dark};

        @media (min-width: 1024px) {
          font-size: 20px;
        }
      }

      &__label {
        font-size: 12px;
        color: ${grey};

        @media (min-width: 1024px) {
          font-size: 14px;
        }
      }
    }
  }

`;

export const Issues = styled.div`
  margin-top: 60px;

  .issues {
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
