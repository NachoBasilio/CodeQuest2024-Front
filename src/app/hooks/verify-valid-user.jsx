import { useQuery } from "@tanstack/react-query"

export default function Testing (){
    const getCurrentUsersChannel=async()=>{
        const token='Cual es el token?'
        const response = await fetch('https://discord.com/api/channels/1130900724499365958',{
            headers:`Bearer ${token}`
        }) //Canal DevTalles
        return response.json()
    }
    const {data,error,status}=useQuery({queryKey:['currentUsers'],queryFn:getCurrentUsersChannel})
    if(error)return <h3>Hay un error;</h3>
    if(status !== 200) return <h3>No autorizado</h3>
    return(
        <div>
            trae datos del canal
            {console.log(data)}
        </div>
    )
}