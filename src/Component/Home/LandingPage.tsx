import { 
    Container,
    Box,
    Text,
    Heading,
    Card,
    CardBody,
    Image,
    Center
} from "@chakra-ui/react";

export const LandingPage:React.FC = ()=>{
    return(
        <Container>
           <Card mt={"3rem"}>
                <CardBody>
                    <Center mt={"0.6rem"}>
                        <Image 
                        src="https://hpassets.smartlook.com/wp-content/uploads/sites/2/2023/02/10172102/how-to-set-up-mobile-app-tracking-to-analyze-user-behavior.png"
                        alt="logo"
                        borderRadius={"0.7rem"}
                        />
                    </Center>
                    <Heading textAlign={"center"} fontSize={"1.5rem"} mt={"0.3rem"}>welcome to E-Tracker</Heading>
                    <Box fontSize={"0.7rem"} textAlign={"center"}>
                        <Text mt={"0.3rem"}>On E-Tracker</Text>
                        <Text  mt={"0.3rem"}>your can report a missing family member or friend</Text>
                        <Text  mt={"0.3rem"}>get realtime help from our users in finding your loved one</Text>
                    </Box>
                </CardBody>
           </Card>
        </Container>
    )
}