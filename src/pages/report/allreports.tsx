import { AllReport } from "@/Component/Reports/AllReports";
import NotAuthHeader from "@/Component/Layout/NotAuthLayout";


export default function allreport(){
    return(
        <NotAuthHeader>
            <AllReport/>
        </NotAuthHeader>
    )
}