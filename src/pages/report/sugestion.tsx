import {Box} from "@chakra-ui/react"
import AuthHeader from "@/Component/Layout/AuthLayout"
import { Sugestion } from "@/Component/Reports/Sugestion"
import NotAuthHeader from "@/Component/Layout/NotAuthLayout"


export default function sugestion(){
    return(
        <NotAuthHeader>
            <Sugestion/>
        </NotAuthHeader>
    )
}