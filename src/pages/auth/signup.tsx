import { Signup } from "@/Component/Auth/Signup";
import NotAuthHeader from "@/Component/Layout/NotAuthLayout";

export default function signup(){
    return(
        <NotAuthHeader>
            <Signup/>
        </NotAuthHeader>
    )
}