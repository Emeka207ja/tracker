
import { Box } from "@chakra-ui/react";
import { ViewReport } from "@/Component/Reports/ViewReport";
import AuthHeader from "@/Component/Layout/AuthLayout";
import { AllReport } from "@/Component/Reports/AllReports";


export default function viewreport(){
    return(
        <AuthHeader>
            <AllReport/>
        </AuthHeader>
    )
}