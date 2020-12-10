import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  light: {
    color: {
      primary_main: '#59D957',
      primary_dark: '#49AF48',
      primary_light: '#83EB81',
      dark_main: '#29292B',
      dark_dark: '#202022',
      dark_light: '#545457',
      dark_subtitle: '#A4A6AC',
      light_main: '#F7F8F9',
      light_dark: '#EBEDF0',
      light_light: '#FAFBFC',
      light_subtitle: '#FFFFFF',
    },
    window: {
      width,
      height,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  },
};
