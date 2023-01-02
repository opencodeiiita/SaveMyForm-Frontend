import { useRouter } from "next/router";
import {post} from "../../../components/utils/API"
import { useEffect } from "react";

export default function OAuth() {
    
    const router = useRouter();

    const  auth = async() => {
    let code = router.query.code;
    console.log(code);
    const response = await post("/auth/google", {
        token : code,
    },);

    console.log(response);
    }

    useEffect(() => {
        if(router.isReady){
            auth();
        }
    },[router]);

    return (
        <div class="grid h-screen place-content-center">
            <div class="flex items-center gap-2">
                <span class="h-10 w-10 block rounded-full border-4 border-t-blue-700 animate-spin"></span>
                Loading...
            </div>
        </div>

    )

}
