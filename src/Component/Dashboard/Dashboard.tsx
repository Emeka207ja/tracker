import { 
    Container,
    Circle,
    Text,
    AspectRatio,
    Card,
    CardBody,
    Center,
    Avatar,
    Box,
    Image

 } from "@chakra-ui/react"
 import { useSearchParams } from "next/navigation"
import { useEffect,useState } from "react"
import { FaUserTie } from "react-icons/fa"
import { iFormState } from "../Auth/Signup"

export const Dashboard:React.FC = ()=>{
    const searchParam = useSearchParams()
    const [user,setUser] = useState<iFormState>()
    const userToken = searchParam.get("name")
    console.log(userToken)
    useEffect(()=>{
        const token = Date.now()
        const loggedIn = {
            name:userToken,
            Token:token
        }
        const loggedInStringified = JSON.stringify(loggedIn)
        localStorage.setItem("loggedin",loggedInStringified)
    },[userToken])

    useEffect(()=>{
        const store = localStorage.getItem("userDetail")
       if(store){
        const parseedStore:iFormState[] = JSON.parse(store)
        const profile = parseedStore.find(item=>item.username === userToken)
        setUser(profile)
       }
    },[userToken])
    console.log(user)
    return(
        <Container>
            <Card>
                <CardBody>
                    <Center >
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                    </Center>
                    <Center mt={"2rem"}>
                        <Box fontSize={"0.8rem"} >
                            <Text mb={"0.7rem"}>name: {user?.username}</Text>
                            <Text>email: {user?.email}</Text>
                        </Box>
                    </Center>
                    <Center mt={"0.6rem"}>
                        <Image 
                        src="https://hpassets.smartlook.com/wp-content/uploads/sites/2/2023/02/10172102/how-to-set-up-mobile-app-tracking-to-analyze-user-behavior.png"
                         alt="logo"
                         borderRadius={"0.7rem"}
                         />
                    </Center>
                </CardBody>
            </Card>
            
        </Container>
    )
}
 


{/* <AspectRatio ratio={16 / 9}>
                <iframe
                     src="https://maps.google.com/maps?q=rivers+state+elelenwo+trinitate+international&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
            </AspectRatio> */}