import {
    Container,
    Box,
    Center,
    Circle,
    Heading,
    Image,
    Text,
    Card,
    CardBody,
    AspectRatio,
    Button,
    HStack
} from "@chakra-ui/react"
import { useState,useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { istoreReport } from "./service"

export const AllReport:React.FC = ()=>{
    const [myReports,setMyReports] = useState<istoreReport[]|[]>([])
    const searchParam = useSearchParams()
    const userId = searchParam.get("id")
    useEffect(()=>{
        const store = localStorage.getItem("report")
        if(store){
            const Reports:istoreReport[] = JSON.parse(store)
            setMyReports(Reports)
        }
    },[userId])
    
    console.log(myReports)
    return(
        <Container>
            <Heading textAlign={"center"} fontSize={"1rem"} mb={"1rem"}>my reports</Heading>
            <Box>
               {
                myReports.length>0? myReports.map(item=>{
                    return(
                        <Card key={item.id} mb={"0.6rem"}>
                           <CardBody fontSize={"0.8rem"}>
                            <Image src={item.image}/>

                            <Box>
                                <Text>name: {item.name}</Text>
                            </Box>
                            <Box>
                                <Text>sex: {item.sex}</Text>
                            </Box>
                            <Box>
                                <Text>height: {item.height}</Text>
                            </Box>

                            <Box>
                                <Text>complexion: {item.color}</Text>
                            </Box>

                            <Box>
                                <Text>fluent language: {item.lang}</Text>
                            </Box>
                            <Box>
                                <Text>last seen state: {item.state}</Text>
                            </Box>
                            <Box>
                                <Text>last seen local govt: {item.lga}</Text>
                            </Box>
                            <Box>
                                <Text>last seen landmark: {item.landmark}</Text>
                            </Box>

                            <Box>
                                <Text>status: {item.found?"found":"not found"}</Text>
                            </Box>
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    src={`https://maps.google.com/maps?q=${item.state}+state+${item.lga}+${item.landmark}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                />
                            </AspectRatio>
                           </CardBody>
                           <HStack mb={"0.7rem"} ml={"0.7rem"}>
                                <Button 
                                colorScheme="blue" 
                                
                                fontSize={"0.7rem"} 
                                as={"a"} 
                                href={`/report/sugestion?id=${item.id}`}
                                >send suggestion</Button>

                                <Button 
                                colorScheme="blue" 
                                
                                fontSize={"0.7rem"} 
                                as={"a"} 
                                href={`/report/viewreport?id=${item.id}`}
                                >view all suggestions </Button>
                           </HStack>
                        </Card>
                    )
                }):(
                    <Card>
                        <CardBody>
                            <Text>You have not reported a missing person yet</Text>
                        </CardBody>
                    </Card>
                )
               }
            </Box>
        </Container>
    )
}