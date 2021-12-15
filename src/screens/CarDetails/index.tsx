import React from 'react';

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
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CardImages>
        <ImageSlider 
          imagesUrl={['https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg']}
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
          Este é automóvel desportivo. Surgiu do lendário 
          touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title='Confirmar' />
      </Footer>
    </Container>
  );
};