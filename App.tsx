import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { 
  Archivo_400Regular, 
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import theme from './src/global/styles/theme';

import { Routes } from './src/navigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium,
    Archivo_400Regular, 
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}