import ButtonNoStyle from 'css/elements/ButtonNoStyle';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export default React.memo(({ onClick }: IProps) => {
  return <Button onClick={onClick}>Load more ...</Button>;
});

const Button = styled.button`
  ${ButtonNoStyle};
  margin-top: 10px;
  margin: 0 auto;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
