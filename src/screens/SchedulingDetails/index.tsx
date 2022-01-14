import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSVG from '../../assets/speed.svg';
import accelarationSVG from '../../assets/acceleration.svg';
import forceSVG from '../../assets/force.svg';
import gasolineSVG from '../../assets/gasoline.svg';
import exchangeSVG from '../../assets/exchange.svg';
import peopleSVG from '../../assets/people.svg';

import {
  Container,
  Header,
  CardImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Acessories,
  Footer,
  CalendarIcon,
  RentalPeriod,
  DateInfo, 
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel, 
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export const SchedulingDetails: React.FC = () => {
  const { navigate } = useNavigation();
  const theme = useTheme();

  const handleConfirmRentNow = useCallback(() => {
    navigate('SchedulingComplete')
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton />
      </Header>
      <CardImages>
        <ImageSlider 
          imagesUrl={['https://i.pinimg.com/originals/74/6b/fc/746bfc39433580c9f9041994e5282b0b.jpg']}
        /> 
      </CardImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>
        <Acessories>
          <Accessory icon={speedSVG} name="380Km/h" />
          <Accessory icon={accelarationSVG} name="3.2s" />
          <Accessory icon={forceSVG} name="800 HP" />
          <Accessory icon={gasolineSVG} name="Gasolina" />
          <Accessory icon={exchangeSVG} name="Auto" />
          <Accessory icon={peopleSVG} name="2 pessoas" />
        </Acessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape.primary}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text.primary}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diaria</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.success} 
          onPress={handleConfirmRentNow}
        />
      </Footer>
    </Container>
  );
};
