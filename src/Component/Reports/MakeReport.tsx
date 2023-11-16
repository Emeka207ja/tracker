import { 
    Container,
    Center,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Box,
    Image
 } from "@chakra-ui/react";
 interface iReport{
    image:string,
    state:string,
    lga:string,
    landmark:string,
    age:string,
    color:string,
    lang:string,
    height:string,
    sex:string,
    name:string
 }
 import {useState,ChangeEvent,useEffect} from "react"
 import { saveReportToStorage,istoreReport } from "./service";
 

 export const MakeReport:React.FC = ()=>{
    const [user,setUser] = useState("")
    const [report,setReport] = useState<iReport>({
        image:"",
        state:"",
        lga:"",
        landmark:"",
        age:"",
        color:"",
        lang:"",
        height:"",
        sex:"",
        name:""
    })

    const formHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setReport(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const submitHandler = (e:React.SyntheticEvent)=>{
        e.preventDefault()
        const{image,state,lga,landmark,age,color,lang,height,sex,name} = report
        saveReportToStorage({
            id:Date.now().toString(),
           image,
           state,
           lga,
           landmark,
           age,
           color,
           lang,
           height,
           found:false,
           reporter:user,
           sex,
           name
        })
        setReport({
            image:"",
            age:"",
            height:"",
            color:"",
            landmark:"",
            lang:"",
            lga:"",
            state:"",
            sex:"",
            name:""
        })
    }
    useEffect(()=>{
        const store = localStorage.getItem("loggedin")
        console.log(store)
        if(store){
          const parsedStore:{ 
            name:string,
            Token:string
          } = JSON.parse(store)
          console.log(parsedStore)
          setUser(parsedStore.name)
        }
      },[])
    return(
        <Container>
            <Heading textAlign={"center"} fontSize={"1rem"} mb={"1rem"}>Report a missing person</Heading>
            <Box bg={"#a2d2ff"} padding={"3rem"} borderRadius={"2rem"}>
                <form onSubmit={submitHandler}>
                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>Image url</FormLabel>
                        <Input name="image" onChange={formHandler} value={report.image}/>
                    </FormControl>

                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>full name</FormLabel>
                        <Input name="name" onChange={formHandler} value={report.name}/>
                    </FormControl>
                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>sex</FormLabel>
                        <Input name="sex" onChange={formHandler} value={report.sex}/>
                    </FormControl>
                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>last seen state</FormLabel>
                        <Input name="state" onChange={formHandler} value={report.state}/>
                    </FormControl>

                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>last seen local government</FormLabel>
                        <Input name="lga" onChange={formHandler} value={report.lga}/>
                    </FormControl>

                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>popular landmark eg school or bustop</FormLabel>
                        <Input name="landmark" onChange={formHandler} value={report.landmark}/>
                    </FormControl>

                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"}>complexion</FormLabel>
                        <Input name="color" onChange={formHandler} value={report.color}/>
                    </FormControl>

                    <FormControl mb={"0.8rem"}>
                        <FormLabel fontSize={"0.7rem"} >height</FormLabel>
                        <Input name="height" onChange={formHandler} value={report.height}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize={"0.7rem"}>language</FormLabel>
                        <Input name="lang" onChange={formHandler} value={report.lang}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel fontSize={"0.7rem"}>age</FormLabel>
                        <Input name="age" onChange={formHandler} type="number" value={report.age}/>
                    </FormControl>
                    <Button colorScheme="blue" w={"full"} mt={"0.7rem"} type="submit">report</Button>
                </form>
            </Box>

           {/* <Image src="https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_1280.jpg" alt="boy"/> */}
           {/* <Image src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg" alt="boy"/> */}
        </Container>
    )
 }