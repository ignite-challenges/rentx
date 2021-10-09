import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.shape.dark};
  font-family: ${({ theme }) => theme.fonts.archivo.semibold};
`;
