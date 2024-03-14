'use client'
import Testing from '@/app/hooks/verify-valid-user'
import styles from './auth.module.css'
import LoginComponentOnlyForAdmin from "./login"

export default function AccesLoginToAdmin(){
    return(
        <main className={styles.container_access_view}>
          <LoginComponentOnlyForAdmin/>
          <Testing/>
        </main>
    )
}