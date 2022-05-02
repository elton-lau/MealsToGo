import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase.config';

export const loginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const registerRequest = async (email, password) => {
  return await createUserWithEmailAndPassword(firebaseAuth, email, password);
};
