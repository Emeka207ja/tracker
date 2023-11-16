import { Dashboard } from "@/Component/Dashboard/Dashboard";
import NotAuthHeader from "@/Component/Layout/NotAuthLayout";
import AuthHeader from "@/Component/Layout/AuthLayout";


export default function dashboard(){
    return(
        <AuthHeader>
            <Dashboard/>
        </AuthHeader>
    )
}