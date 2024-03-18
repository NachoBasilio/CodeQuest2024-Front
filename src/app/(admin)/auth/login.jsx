'use client'
import styles from './auth.module.css';
const { verifyIfIsAdmin } = require('../../hooks/admin-verify-login').default;
import { useState, useEffect } from 'react';
import PanelOptions from '../components/control-panel'
export default function LoginComponentOnlyForAdmin(){
    const [data,setData]=useState(false)
    const [loading,setLoading]=useState(false)

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
    return(
        <>
        {data ===  false ?
            <PanelOptions/>
                    :
            <section className={styles.form_to_access} >
                <div >
                    <button >INGRESAR con ID de admin</button>
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