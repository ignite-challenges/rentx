import React, { useCallback } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Content,
  Message,
  Footer
} from './styles';

import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSVG from '../../assets/logo_background_gray.svg';
import DoneSVG from '../../assets/done.svg';


export const SchedulingComplete: React.FC = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  const handleConclude = useCallback(() => {
    navigate('Home')
  }, []);

  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />
      <LogoSVG width={width} />
      <Content>
        <DoneSVG width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora voce so precisa ir{'\n'}
          ate a concessionaria da RENT{'\n'}
          pegar o seu automovel.
        </Message>
      </Content >
      <Footer>
        <ConfirmButton 
          title='OK'
          onPress={handleConclude}
        />
      </Footer>
    </Container>
  );
};