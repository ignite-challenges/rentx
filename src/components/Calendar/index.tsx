import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { 
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br'

export const Calendar: React.FC = () => {
  const theme = useTheme();
  return (
    <CustomCalendar 
      renderArrow={(direction) => 
        <Feather 
          size={24} 
          color={theme.colors.text.primary} 
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      }
      headerStyle={{
        backgroundColor: theme.colors.background.secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text.detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.inter.regular,
        textDayHeaderFontFamily: theme.fonts.inter.medium,
        textDayFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.text.title,
        textMonthFontFamily: theme.fonts.archivo.semibold,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
};