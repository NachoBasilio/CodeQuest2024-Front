'use client'
import styles from '../auth/auth.module.css'
import { useState } from 'react'
import CreateNewLottery from './form-create-lottery'
import GetAWinner from '../components/wheel-lottery'
export default function PanelOptions(){
    const [option,setOption]=useState(false)
    return(
        <section className={styles.panel_options}>
            <div>
                <button onClick={()=>setOption(false)}>Nuevo Sorteo</button>
                <button onClick={()=>setOption(true)}>Ver Sorteo</button>
            </div>
            {option === false ? <CreateNewLottery/> : <GetAWinner/>}
        </section>
    )
}