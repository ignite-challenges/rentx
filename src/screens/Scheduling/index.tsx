import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSVG from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

export const Scheduling: React.FC = () => {
  const { navigate } = useNavigation();
  const theme = useTheme();

  const handleConfirmDate = useCallback(() => {
    navigate('SchedulingDetails')
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor='transparent'
          translucent
        />
        <BackButton 
          color={theme.colors.shape.primary}
        />
        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/21</DateValue>
          </DateInfo>
          <ArrowSVG />
          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue selected={false}>18/06/21</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>
      <Footer>
        <Button 
          title="Confirmar" 
          onPress={handleConfirmDate} 
        />
      </Footer>
    </Container>
  );
};