import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '~/config/environments';

export async function setStorageState(state) {
  try {
    const stringState = JSON.stringify(state);
    await AsyncStorage.setItem(config.storage_key, stringState);
  } catch (error) {
    console.log(`FAIL setStorageState`, error);
  }
}

export async function getStorageState() {
  try {
    const stringState = await AsyncStorage.getItem(config.storage_key);
    const parsed = JSON.parse(stringState);
    return parsed;
  } catch (error) {
    console.log(`FAIL getStorageState`, error);
  }
}
