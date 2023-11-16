import {
    Center,
    Container,
    Input,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Text
    
} from "@chakra-ui/react"
import Link from "next/link"
import {useState,useEffect,ChangeEvent} from "react"
export interface iFormState{
    username:string,
    email:string,
    password:string,
    confirm_password:string,
    isAdmin:false
}
import { useRouter } from "next/router"
import { saveToStorage,validateUser, validateUsername } from "./service"

export const Signup:React.FC = ()=>{
    const [formState,setFormState] = useState<iFormState>({username:"",email:"",password:"",confirm_password:"",isAdmin:false})
    const [emptyInput,setEmptyInput] = useState(false)
    const [passwordNotEqual,setNotEqual] = useState(false)
    const [duplicateName,setDuplicate] = useState(false)
    const router = useRouter()

    const formHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setFormState(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
  
    const submitHandler = (e:React.SyntheticEvent)=>{
       e.preventDefault()
       if(formState.username.length<=0 || formState.email.length<=0 ||formState.password.length<=0||formState.confirm_password.length<=0){
            setEmptyInput(true)
            return
       }else{
        setEmptyInput(false)
       }
       if(formState.password!==formState.confirm_password){
            setNotEqual(true)
            return
       }else{
        setNotEqual(false)
       }
       const Emailexist = validateUser(formState)
       const usernameExist = validateUsername(formState)
       console.log(Emailexist, usernameExist)
       if(Emailexist||usernameExist){
            setDuplicate(true)
            return;
       }else{
        setDuplicate(false)
       }
       saveToStorage(formState)
        router.push("/auth/login")
    }
    return(
        <Container  mt={"3rem"}>
            <Heading textAlign={"center"} fontSize={"1rem"} >Sign up </Heading>
            {
                emptyInput&&(<Center>
                    <Text color={"red"} fontSize={"0.9rem"}>no input should be empty</Text>
                </Center>)
            }
            {
                passwordNotEqual&&(<Center  mt={"0.7rem"}>
                    <Text color={"red"} fontSize={"0.9rem"}>password must match</Text>
                </Center>)
            }
            {
                duplicateName&&(<Center  mt={"0.7rem"}>
                    <Text color={"red"} fontSize={"0.9rem"}>username or email already exist</Text>
                </Center>)
            }
              <form onSubmit={submitHandler}>
                <FormControl>
                        <FormLabel fontSize={"0.7rem"}>user name</FormLabel>
                        <Input
                            name="username"
                            onChange={formHandler}
                          />
                    </FormControl>

                    <FormControl mt={"0.6rem"}>
                        <FormLabel fontSize={"0.7rem"}>Email</FormLabel>
                        <Input
                            name="email"
                            onChange={formHandler}
                        />
                    </FormControl>
                    
                    <FormControl mt={"0.6rem"}>
                        <FormLabel fontSize={"0.7rem"}>Password</FormLabel>
                        <Input
                            name="password"
                            onChange={formHandler}
                        />
                    </FormControl>

                    <FormControl mt={"0.6rem"}>
                        <FormLabel fontSize={"0.7rem"}>Confirm Password</FormLabel>
                        <Input
                            name="confirm_password"
                            onChange={formHandler}
                        />
                    </FormControl>
                    <Button colorScheme="blue" w={"100%"} mt={"1rem"} type="submit">submit</Button>
              </form>
               
           
            <Center mt={"0.4rem"}>
                <Text fontSize={"0.6rem"}>already has an account? <Link href={"/auth/login"} passHref>login</Link></Text>
            </Center>
        </Container>
    )
}