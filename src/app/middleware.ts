import { cookies } from "next/headers";
export function isLogAccess(){
    const cookieStore = cookies()
    const cookieGetIt = cookieStore.get('auth')?.value
    console.log(cookieGetIt)
    return 'Cookie get it'
}
