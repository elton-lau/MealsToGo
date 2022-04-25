import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase.config';

export const loginRequest = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (e) {
    console.error('authentication error', e);
  }
};
