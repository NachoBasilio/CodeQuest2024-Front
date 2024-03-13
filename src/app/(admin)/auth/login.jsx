import styles from './auth.module.css'
export default function LoginComponentOnlyForAdmin(){
    return(
        <form className={styles.fomr_to_access}>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button type="submit">Ingresar</button>
        </form>
    )
}