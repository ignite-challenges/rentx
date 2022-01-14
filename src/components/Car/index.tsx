import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import GasolineSVG from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage
} from './style';

interface Props extends RectButtonProps {
  data: Data;
}

interface Data {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export const Car: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>
      <CardImage source={{ uri: data.thumbnail }} />
    </Container>
  );
};