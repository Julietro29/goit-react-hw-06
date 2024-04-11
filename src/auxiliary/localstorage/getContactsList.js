import { KEY_LOCALSTORAGE } from '../constants';
import { contactsData } from '../contactsData';

export const getContactsList = () => {
  const strSavedData = localStorage.getItem(KEY_LOCALSTORAGE);

  const devMode = import.meta.env.VITE_DEV_MODE === 'true';

  if (!strSavedData) return devMode ? contactsData : [];
  return JSON.parse(strSavedData);
};