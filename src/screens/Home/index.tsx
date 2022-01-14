import React, { useCallback } from 'react';
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const list = [1,2,3,4,5,6,7,8,9,10];

  const data = {
    brand: 'brand',
    name: 'name',
    rent: {
      period: 'period',
      price: 100
    },
    thumbnail: 'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg'
  }
  
  const handleNavigate = useCallback(() => {
    navigate('CarDetails')
  }, []);

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
          <TotalCars>Total de {list.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList 
        data={list}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <Car 
            data={data} 
            onPress={handleNavigate} 
          />
        }
      />
    </Container>
  );
};