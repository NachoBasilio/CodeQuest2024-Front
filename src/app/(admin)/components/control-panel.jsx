'use client'
import styles from '../auth/auth.module.css'
import { useState } from 'react'
import CreateNewLottery from '../components/form-create_lottery'
export default function PanelOptions(){
    const [option,setOption]=useState(false)
    return(
        <section className={styles.panel_options}>
            <div>
                <button onClick={()=>setOption(false)}>Nuevo Sorteo</button>
                <button onClick={()=>setOption(true)}>Ver Sorteos</button>
            </div>
            {option === false ? <CreateNewLottery/> : <div>Ver sorteos</div>}
        </section>
    )
}