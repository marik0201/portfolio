import axios from 'axios';
import LocalStorage from '../../services/local-storage';

export const editContactAddress = async address => {
  return await axios.post(
    'http://localhost:3000/api/admin/address',
    {
      address
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const editContactTelephone = async telephone => {
  return await axios.post(
    'http://localhost:3000/api/admin/telephone',
    {
      telephone
    },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const editContactEmail = async email => {
  return await axios.post(
    'http://localhost:3000/api/admin/email',
    { email },
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};

export const changeContactsVisibiliy = async () => {
  return await axios.post(
    'http://localhost:3000/api/admin/contact/visibility',
    {},
    {
      headers: {
        Authorization: 'JWT ' + LocalStorage.getToken(),
        'Content-Type': 'application/json'
      }
    }
  );
};
