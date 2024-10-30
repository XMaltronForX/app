import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { User } from '../models/user.model';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {getFirestore,setDoc,doc,getDoc,addDoc,collection,updateDoc} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {getStorage,uploadString,ref,getDownloadURL} from "firebase/storage"


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore= inject(AngularFirestore);
  utilsSvc= inject(UtilsService);
  storeage= inject(AngularFireStorage)
  // ======================== AUTENTICACION ===================


getAuth(){
  return getAuth();
}

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

sendRecoveryEmail(email:string){
  return sendPasswordResetEmail(getAuth(),email)
}

signOut(){
  getAuth().signOut();
  localStorage.removeItem('user');
  this.utilsSvc.routerLink('/auth');
}


setDocument(path:string,data:any){
  return setDoc(doc(getFirestore(),path),data);

}

updateDocument(path:string,data:any){
  return updateDoc(doc(getFirestore(),path),data);

}

 async getDocument(path:string){
  return (await getDoc(doc(getFirestore(),path))).data();

}

 addDocument(path:string,data:any){
  return addDoc(collection(getFirestore(),path),data);

}

async uploadImage(path:string,data_url:string){
  return uploadString(ref(getStorage(),path),data_url,'data_url').then(()=>{
    return getDownloadURL(ref(getStorage(),path))
  })

}

}
