import Link from "next/link";
export default function HowGetDiscordID (){
    const urlToSeeTutorial="https://www.youtube.com"
    return(
        <Link
         href={urlToSeeTutorial}
         target="_blank"
         style={{textDecoration:'none',color:'#f89c56'}}
         >ID de discord</Link>        
    )
}