'use client'
import Link from "next/link";
export default function InviteToDiscordChannel (){
    const URL_Channel="https://discord.gg/9N4RFaSR"
    return(
        <Link
         href={URL_Channel}
         target="_blank"
         style={{textDecoration:'none',color:'#f89c56'}}
         >canal</Link>
    )
}