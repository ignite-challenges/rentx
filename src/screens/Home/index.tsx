import React from 'react';
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export const Home: React.FC = () => {
  const data = {
    brand: 'brand',
    name: 'name',
    rent: {
      period: 'period',
      price: 100
    },
    thumbnail: 'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg'
  }
  
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)}/>
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <Car data={data} />
    </Container>
  );
};