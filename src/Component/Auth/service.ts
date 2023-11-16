import { iFormState } from "./Signup"
const store:iFormState[] = [
    {
        username:"test",
        email:"deedee@gmail.com",
        password:"8888",
        confirm_password:"8888",
        isAdmin:false
    }
]
export const saveToStorage = (detail:iFormState)=>{
    const stored = localStorage.getItem("userDetail")
    if(stored){
        const parsedStored:iFormState[] = JSON.parse(stored)
        store.push( detail)
        const detailVal = JSON.stringify(store)
        localStorage.setItem("userDetail",detailVal);
    }else{
        store.push(detail)
        const detailVal = JSON.stringify(store)
        localStorage.setItem("userDetail",detailVal);
        console.log(store)
    }
    
}

export const validateUser = (detail:iFormState)=>{
    const storage = localStorage.getItem("userDetail")
   if(storage){
    const storageParsed:iFormState[] = JSON.parse(storage)
    const emailExist = storageParsed.find(item=>item.email===detail.email)
    if(emailExist) return true
   }
}
export const validateUsername = (detail:iFormState)=>{
    const storage = localStorage.getItem("userDetail")
   if(storage){
    const storageParsed:iFormState[] = JSON.parse(storage)
    const usernameExist = storageParsed.find(item=>item.username===detail.username)
    if(usernameExist) return true
   }
}