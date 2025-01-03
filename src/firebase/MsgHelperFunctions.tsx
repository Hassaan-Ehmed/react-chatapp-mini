import React from 'react'
import {createUserWithEmailAndPassword , getAuth , updateProfile , signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebaseConfig'



export const updateUserObj = async (userId:string,userPacket:any)=>{

    const auth = getAuth();
 
    updateProfile(auth?.currentUser as any,{
        displayName:`${auth.currentUser?.email?.split("@")[0]}:${userId}DN`,

    }).then(()=>{
        
        console.log("Profile Updated Successfully!");

    })

}


export const SigninExsistinguser = (email:string,password:string)=>{

    signInWithEmailAndPassword(auth,email,password).then((cred)=>{

        // console.log("User Logged In!",cred);
        
        window.location.replace('/chat'); // redirect user on  chat page

        
    }).catch((error)=>{

        if(error.message === "Firebase: Error (auth/email-already-in-use)."){
            console.log("User Already Exisit!");
        }else{
            console.log("Error while creating user!",error);
        }
    })

} 



export const createNewUser =  (email:string,password:string)=>{

    createUserWithEmailAndPassword(auth,email,password).then((cred)=>{
        
        console.log("User is created successfully!",getAuth().currentUser);

        updateUserObj(String(cred.user.uid),cred); // uid and user details packet

        window.location.replace('/signin'); // redirect user on  sign in page


        
    }).catch((error)=>{
        
        if(error.message === "Firebase: Error (auth/email-already-in-use)."){
            console.log("User Already Exisit!");
        }else{
            console.log("Error while creating user!",error);
        }
        
    })
}

