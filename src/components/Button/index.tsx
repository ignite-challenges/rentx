import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface Props {
  title: string;
  color: string;
}

export const Button: React.FC<Props> = ({ title, color, ...rest }) => {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};