import { getInfoAbout } from '../api/about';
import { getContacts } from '../api/contact';

export const getProfile = async () => {
  const about = await getInfoAbout();
  const contacts = await getContacts();

  return { about, contacts, avatar };
};
