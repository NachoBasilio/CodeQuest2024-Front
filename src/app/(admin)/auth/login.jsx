'use client'
import styles from './auth.module.css';
const { verifyIfIsAdmin } = require('../../hooks/admin-verify-login').default;
import { useState, useEffect } from 'react';
export default function LoginComponentOnlyForAdmin(){
    const [adminSuccess,setAdminSuccess]=useState(false)
    const [data,setData]=useState(false)
    useEffect(()=>{
        const fetchAdminData=async()=>{
            try {
                const res=await verifyIfIsAdmin()
                let checkAdmin=JSON.parse(data).isAdmin
                setData(checkAdmin)
            } catch (error) {
                    console.log(error)
            }
        }
        fetchAdminData()
        
    },[])
    
    return(
        <>
        {
            data ===  true ? <div>hola aqui ira el panel de control</div>:
        <section className={styles.form_to_access} >
            <div >
                <button >INGRESAR con ID de admin</button>
            </div>
        </section>
        }
        </>
      
    )
}