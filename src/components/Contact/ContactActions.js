const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
const SEND_EMAIL_FAILED = 'SEND_EMAIL_FAILED';

import cogoToast from 'cogo-toast';
import { sendMessageToEmail } from '../../api/email';

export const sendEmail = (name, email, message) => async dispatch => {
  try {
    await sendMessageToEmail(name, email, message);

    cogoToast.success('Message was sent');
  } catch (error) {
    cogoToast.error(error);
  }
};
