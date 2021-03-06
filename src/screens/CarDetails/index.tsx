import React, { useCallback } from 'react';
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
  About,
  Acessories,
  Footer
} from './styles';

export const CarDetails: React.FC = () => {
  const { navigate } = useNavigation();

  const handleChooseRentalPeriod = useCallback(() => {
    navigate('Scheduling')
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
        <About>
          Este ?? autom??vel desportivo. Surgiu do lend??rio 
          touro de lide indultado na pra??a Real Maestranza de Sevilla.
          ?? um bel??ssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button 
          title='Escolher periodo do aluguel' 
          onPress={handleChooseRentalPeriod} 
        />
      </Footer>
    </Container>
  );
};