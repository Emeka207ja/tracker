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
import { useRouter } from "next/router"
import {ChangeEvent, useEffect,useState} from "react"
import { iFormState } from "./Signup"


export const Login = ()=>{
    const router = useRouter()
    const [formState,setFormState] = useState<{username:string,password:string}>({username:"",password:""})
    const [invalidUser,setInvalidUser] = useState(false)
    const formHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setFormState(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const submitHandler =(e:React.SyntheticEvent)=>{
        e.preventDefault()
       
        const storage = localStorage.getItem("userDetail")
       if(storage){
            const parsedStorage:iFormState[] = JSON.parse(storage)
            const userExist = parsedStorage.find(item=>item.username === formState.username && item.password===formState.password)
            if(userExist){
                router.push(`/dashboard?name=${userExist.username}`)
            }else{
                setInvalidUser(true)
                return
            }
            console.log(userExist)
       }
        // router.push("/dashboard")
    }
    return(
        <Container  mt={"3rem"}>
            <Heading textAlign={"center"} fontSize={"1rem"} mb={"1rem"}>Login </Heading>
            {
                invalidUser&&(
                    <Center>
                        <Text color={"red"}>invalid login credentials</Text>
                    </Center>
                )
            }
          
              <form onSubmit={submitHandler}>
                <FormControl>
                        <FormLabel fontSize={"0.7rem"}>user name</FormLabel>
                        <Input name="username" onChange={formHandler}/>
                    </FormControl>

                    
                    
                    <FormControl mt={"0.6rem"}>
                        <FormLabel fontSize={"0.7rem"}>Password</FormLabel>
                        <Input name="password" onChange={formHandler}/>
                    </FormControl>

                    
                    <Button colorScheme="blue" w={"100%"} mt={"1rem"} type="submit">submit</Button>
              </form>
               
          
            <Center mt={"0.4rem"}>
                <Text fontSize={"0.6rem"}>no account yet? <Link href={"/"} passHref>signup</Link></Text>
            </Center>
        </Container>
    )
}