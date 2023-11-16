import AuthHeader from "@/Component/Layout/AuthLayout";
import { MakeReport } from "@/Component/Reports/MakeReport";


export default function makereport(){
    return(
        <AuthHeader>
            <MakeReport/>
        </AuthHeader>
    )
}