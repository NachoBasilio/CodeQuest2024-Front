'use client'
import { useState } from "react";
import styles from '../auth/auth.module.css'
export default function CreateNewLottery(){
    const [dataLottery, setDataLottery] = useState({
        gift_name:'',
        gift_date:''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(dataLottery);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    setDataLottery({ ...dataLottery, [name]: value });
    };
    return(
        <form className={styles.form_to_create} method='POST' onSubmit={handleSubmit}>
                <section>
                    <div className={styles.container_field_create}>
                        <label >Nombre del premio</label>
                        <input type='text'
                        name='gift_name'
                        value={dataLottery.gift_name}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.container_field_create}>
                        <label >Fecha del sorteo</label>
                        <input type='date'
                        name='gift_date'
                        value={dataLottery.gift_date}
                        onChange={handleInputChange} />
                    </div>
                </section>
                <button type='submit'>
                    Crear sorteo
                </button>
            </form>
    )
}