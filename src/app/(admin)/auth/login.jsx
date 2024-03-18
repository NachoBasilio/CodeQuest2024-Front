'use client'
import styles from './auth.module.css';
const { verifyIfIsAdmin } = require('../../hooks/admin-verify-login').default;
import { useState, useEffect } from 'react';
import PanelOptions from '../components/control-panel'
export default function LoginComponentOnlyForAdmin(){
    const [data,setData]=useState(false)
    

    useEffect(()=>{
        const fetchAdminData=async()=>{
            try {
                const res=await verifyIfIsAdmin()
                if(res === undefined){
                    setData(false)
                }else{
                    let checkAdmin=JSON.parse(res).isAdmin
                    setData(checkAdmin)
                }
            } catch (error) {
                    console.log(error)
            }
        }
        fetchAdminData()
    },[])
    const logoText="{D/T}"
    const opentWebToAccesPermissions=()=>{
        window.location='https://discord.com/oauth2/authorize?client_id=1217829381645533208&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect%2F1&scope=identify+guilds+email+guilds.join+guilds.members.read+connections'
    }
    return(
        <>
        {data ===  true ?
            <PanelOptions/>
                    :
            <section className={styles.form_to_access} >
                <div >
                    <button onClick={opentWebToAccesPermissions}>INGRESAR con ID de admin</button>
                </div>
            </section>
        }
        <span 
        style={{position:'fixed',bottom:'20px',right:'20px',color:'#f89c56',fontWeight:'bolder',fontSize:'20px'}}>
            {logoText}
        </span>
        </>
      
    )
}