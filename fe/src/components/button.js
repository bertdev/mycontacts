import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
