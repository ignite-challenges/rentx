import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
}

export const Button: React.FC<Props> = ({ title, color, ...rest }) => {
  const theme = useTheme();

  return (
    <Container {...rest} color={color || theme.colors.main.primary}>
      <Title>{title}</Title>
    </Container>
  );
};