import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 99px;
  height: 82px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 16px;
  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${RFValue(12)}px;
`;
