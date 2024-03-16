import { NextResponse } from "next/server"
import { cookies } from "next/headers"
export  async function GET(){
    const cookieStore = cookies()
    const checkIfExist=cookieStore.has('userinfo')
    if(checkIfExist){
         const data_res = cookieStore.get('userinfo')?.value
         return NextResponse.json({ data_res },{status:200})
     }else{
        return NextResponse.json({message:'Do not exist HERE!!!'},{status:404})
     }
}
