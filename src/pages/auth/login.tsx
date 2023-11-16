import { Login } from "@/Component/Auth/Login";
import NotAuthHeader from "@/Component/Layout/NotAuthLayout";

export default function login(){
    return(
        <NotAuthHeader>
            <Login/>
        </NotAuthHeader>
    )
}