import { 
    Container,
    Card,
    CardBody,
    AspectRatio,
    Box,
    Image,
    Text
 } from "@chakra-ui/react";
import {useEffect,useState} from "react"
import { useSearchParams } from "next/navigation";
import { istoreReport,iSuggestionReport } from "./service";

 export const ViewReport:React.FC = ()=>{
    const searchParam = useSearchParams()
    const [report,setReport] = useState<istoreReport|null>(null)
    const [sugestions,setSuggestions] = useState<iSuggestionReport[]|[]>([])
    const id = searchParam.get("id")
    useEffect(()=>{
        const storage = localStorage.getItem("report")
        if(storage){
            const parsedStorage:istoreReport[] = JSON.parse(storage)
            const missingReport = parsedStorage.find(item=>item.id ===id)
            if(missingReport)setReport(missingReport)
        }
    },[id])

    useEffect(()=>{
        const storage = localStorage.getItem("suggestion")
        if(storage){
            const parsedStorage:iSuggestionReport[] = JSON.parse(storage)
            const suggestionReport = parsedStorage.filter(item=>item.relation ===id)
            if(suggestionReport){
                setSuggestions(suggestionReport)
                console.log(suggestionReport)
            }
        }
    },[id,report])
    return(
        <Container>
           <Card>
            <CardBody>
                <Image src={report?.image} alt="missing"/>
                <Text mt={"0.6rem"} fontSize={"0.7rem"}>{report?.name}</Text>
            </CardBody>
           </Card>

           <Box mt={"0.7rem"}>
                {
                    sugestions.length>0 ?sugestions.map(item=>{
                        return(
                           <Card 
                           mt={"0.7rem"}
                           key={item.id}
                           >
                                <CardBody>
                                    <Box fontSize={"0.7rem"} mb={"0.7rem"}>
                                        <Text>last seen by {item.name} at :</Text>
                                        <Text>{item.state}</Text>
                                        <Text>{item.lga}</Text>
                                        <Text>{item.landmark}</Text>
                                    </Box>
                                    <AspectRatio ratio={16 / 9}>
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${item.state}+state+${item.lga}+${item.landmark}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                        />
                                    </AspectRatio>
                                <Box mt={"0.7rem"} fontSize={"0.8rem"}>
                                        <Text>extra suggestion:</Text>
                                        <Text>{item.sugestion}</Text>
                                </Box>
                                <Box mt={"0.7rem"}>
                                    <Text fontSize={"0.7rem"} fontStyle={"italic"}>reported by {item.name}</Text>
                                </Box>
                                </CardBody>
                           </Card>
                        )
                    }):(
                        <Text fontSize={"0.7rem"}>No suggestions yet</Text>
                    )
                }
           </Box>
        </Container>
    )
 }