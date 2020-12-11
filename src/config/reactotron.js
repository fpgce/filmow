import Reactotron from 'reactotron-react-native';

let reactotron = null;

if (__DEV__) {
  const tron = Reactotron.configure().useReactNative().connect();

  tron.clear();
  reactotron = tron;
  console.log = tron.log;
}

export default reactotron;
