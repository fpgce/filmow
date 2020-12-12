import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '~/config/environments';

export async function setStorageState({context, state}) {
  try {
    const stringState = JSON.stringify(state);
    await AsyncStorage.setItem(`${config.storage_key}-${context}`, stringState);
  } catch (error) {
    console.log(`FAIL setStorageState`, error);
  }
}

export async function getStorageState({context}) {
  try {
    const stringState = await AsyncStorage.getItem(
      `${config.storage_key}-${context}`,
    );
    const parsed = JSON.parse(stringState);
    return parsed;
  } catch (error) {
    console.log(`FAIL getStorageState`, error);
  }
}
