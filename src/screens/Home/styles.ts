import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px 32px;
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 24 },
  showsVerticalScrollIndicator: false
})``;
