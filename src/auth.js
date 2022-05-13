import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initauth } from './firebaseConfig'
 
// SIGNUP 
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
// LOGIN 
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}