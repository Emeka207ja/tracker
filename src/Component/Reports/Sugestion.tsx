import { 
    Container,
    Box,
    Center,
    Text,
    Heading,
    Card,
    CardBody,
    Image,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea
 } from "@chakra-ui/react";
 import {useState,useEffect,ChangeEvent} from "react"
 import { useSearchParams } from "next/navigation";
import { iFormState } from "../Auth/Signup";
import { istoreReport } from "./service";
import { saveSuggestionToStorage,iSuggestionReport} from "./service";

export interface iSugestion{
    state:string,
    lga:string,
    landmark:string,
    name:string
}


 export  const Sugestion:React.FC = ()=>{
    const searchParam = useSearchParams()
    const [selectedReport,setSelected] = useState<istoreReport>()
    const [reportSugestion,setSugestion] = useState<iSugestion>({state:"",lga:"",landmark:"",name:""})
    const [suggestion,setExtraSuggestion] = useState("")
    const id = searchParam.get("id")
    const formHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setSugestion(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const formTextArea = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setExtraSuggestion(e.target.value)
    }

    const submitHandler = (e:React.SyntheticEvent)=>{
        e.preventDefault()
        const {state,lga,landmark,name} = reportSugestion
        const store:iSuggestionReport = {
            id:Date.now().toString(),
            state,
            lga,
            landmark,
            sugestion:suggestion,
            relation:id!,
            name
        }
        saveSuggestionToStorage(store)
        setExtraSuggestion("")
        setSugestion({
            state:"",
            lga:"",
            landmark:"",
            name:""
        })
       
    }
    useEffect(()=>{
        const storage = localStorage.getItem("report")
        if(storage){
            const parsedStorage:istoreReport[] = JSON.parse(storage)
            const report = parsedStorage.find(item=>item.id===id)
            setSelected(report)
            console.log(report)
        }
    },[id])
    return(
        <Container>
            <Heading textAlign={"center"} fontSize={"1rem"} mb={"0.7rem"}>report id : {id}</Heading>
            <Card>
                <CardBody>
                    <Image src={selectedReport?.image} alt="lost"/>
                    <Box mt={"1rem"}>
                        <form onSubmit={submitHandler}>
                            <FormControl mb={"0.6rem"}>
                                <FormLabel fontSize={"0.7rem"}>your name please</FormLabel>
                                <Input name="name" onChange={formHandler} value={reportSugestion.name}/>
                            </FormControl>

                            <FormControl mb={"0.6rem"}>
                                <FormLabel fontSize={"0.7rem"}>state last seen</FormLabel>
                                <Input name="state" onChange={formHandler} value={reportSugestion.state}/>
                            </FormControl>

                            <FormControl mb={"0.6rem"}>
                                <FormLabel fontSize={"0.7rem"}>Local Govt last seen</FormLabel>
                                <Input name="lga" onChange={formHandler} value={reportSugestion.lga}/>
                            </FormControl>

                            <FormControl mb={"0.6rem"}>
                                <FormLabel fontSize={"0.7rem"}>Popular landmark around</FormLabel>
                                <Input name="landmark" onChange={formHandler} value={reportSugestion.landmark}/>
                            </FormControl>

                            <FormControl mb={"0.6rem"}>
                            <FormLabel fontSize={"0.7rem"}>more suggestions</FormLabel>
                                <Textarea name="state" onChange={formTextArea} value={suggestion}/>
                            </FormControl>

                            <Button w={"full"} colorScheme="blue" type="submit">submit</Button>
                        </form>
                    </Box>
                </CardBody>
            </Card>
        </Container>
    )
 }