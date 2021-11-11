import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  color: white;
  display: inline-block;
  background-color: #bf8f78;
  font-size: 0.8em;
  padding: 5px 30px;
  border: 2px solid #c92a2a;
  border-radius: 10px;
  text-transform: uppercase;
  :hover {
    background-color: #fa5252;
  }
`;
