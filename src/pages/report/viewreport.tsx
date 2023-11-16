import NotAuthHeader from "@/Component/Layout/NotAuthLayout";
import { Box } from "@chakra-ui/react";
import { ViewReport } from "@/Component/Reports/ViewReport";


export default function viewreport(){
    return(
        <NotAuthHeader>
           <ViewReport/>
        </NotAuthHeader>
    )
}