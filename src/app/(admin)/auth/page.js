'use client'
import styles from './auth.module.css'
import LoginComponentOnlyForAdmin from "./login"

export default function AccesLoginToAdmin(){
    return(
        <main className={styles.container_access_view}>
          <LoginComponentOnlyForAdmin/>
        </main>
    )
}