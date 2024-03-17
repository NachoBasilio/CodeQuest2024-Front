import { NextResponse } from "next/server"
import { cookies } from "next/headers"
export  async function GET(){
    const cookieStore = cookies()
    const checkIfExist=cookieStore.has('userinfo')
    const tokenIfExist=cookieStore.has('token').valueOf()
    if(checkIfExist && tokenIfExist){
         const data_res = cookieStore.get('userinfo')?.value
         return NextResponse.json({ data_res },{status:200})
     }else{
        return NextResponse.json({message:'Do not exist HERE!!!'},{status:404})
     }
}
