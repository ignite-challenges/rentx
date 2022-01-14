import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

interface Props extends BorderlessButtonProps {
  color?: string;
}

export const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme();
  const { goBack } = useNavigation();

  return (
    <Container {...rest} onPress={goBack}>
      <MaterialIcons 
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text.primary}
      />
    </Container>
  );
};