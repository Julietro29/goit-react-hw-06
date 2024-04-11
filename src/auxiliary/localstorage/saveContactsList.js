import { KEY_LOCALSTORAGE } from '../constants';

export const saveContactsList = contacts => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(contacts));
};