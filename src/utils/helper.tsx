import { createNewUser, SigninExsistinguser } from "@/firebase/MsgHelperFunctions";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


export const validateRegex =  (email:string,password:string,whichPurpose:string)=>{


    if(email.trim() !== "" && emailRegex.test(email)){

      if(password.trim() !== "" && (password.length >= 6 && password.length <= 25)){
            
          console.log("here we go...",{
            email,
            password
          });

          switch(whichPurpose){
            
            case "signup": 
            createNewUser(email,password);
            break;

            case "signin": 
            SigninExsistinguser(email,password);
            break;
        }

      }else{
        console.log("Password length must be in 6 to 25 characters long");return
      }
  }else{
    console.log("please provide email in correct format");return;
  }

}

// check and validate input fields
export const FormChecks  = (email:string,password:string,whichPurpose:string)=>{

  if(email.trim() == "" && password.trim() == ""){

    console.log("Empty form can't be submitted!"); return;
    
  }else if(email.trim() == ""){
    
    console.log("Email is required"); return;
    
  }else if ( password.trim() == ""){
    
    console.log("Password is required");return;

  }else if (email.trim() !== "" && password.trim() !== ""){

    validateRegex(email,password,whichPurpose);

  }
}