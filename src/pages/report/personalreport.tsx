import AuthHeader from "@/Component/Layout/AuthLayout";
import { PersonalReport } from "@/Component/Reports/PersonalReport";

export default function personalreport(){
    return(
        <AuthHeader>
            <PersonalReport/>
        </AuthHeader>
    )
}