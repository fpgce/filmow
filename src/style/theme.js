import {Dimensions} from 'react-native';
import Normalize from './normalizeDevices';

const {width, height} = Dimensions.get('window');

const defaultPropsBetweenThemes = {
  window: {
    width,
    height,
  },
  normalize: (px) => Normalize(px),
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    elevation: 5,
  },
};

export default {
  light: {
    ...defaultPropsBetweenThemes,
    statusBar: {
      barStyle: 'dark-content',
      backgroundColor: '#FAFBFC',
    },
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
  },
  dark: {
    ...defaultPropsBetweenThemes,
    statusBar: {
      barStyle: 'light-content',
      backgroundColor: '#29292B',
    },
    color: {
      primary_main: '#59D957',
      primary_dark: '#49AF48',
      primary_light: '#83EB81',
      dark_main: '#F7F8F9',
      dark_dark: '#FAFBFC',
      dark_light: '#F7F8F9',
      dark_subtitle: '#FFFFFF',
      light_main: '#29292B',
      light_dark: '#EBEDF0',
      light_light: '#202022',
      light_subtitle: '#A4A6AC',
    },
  },
};
