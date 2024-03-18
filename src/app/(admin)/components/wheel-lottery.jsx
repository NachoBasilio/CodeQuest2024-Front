'use client'
import { useState } from 'react';
import styles from '../auth/auth.module.css';

export default function GetAWinner() {
    const [participants, setParticipants] = useState([]);
    const [winner, setWinner] = useState(null);
    const [selectingWinner, setSelectingWinner] = useState(false);
    const getCurrentsUsers = JSON.parse(localStorage.getItem('current_raffle_data')).participants;

    const selectWinner = () => {
        const randomIndex = Math.floor(Math.random() * getCurrentsUsers.length);
        const selectedWinner = getCurrentsUsers[randomIndex];
        setWinner(selectedWinner);
    };

    return (
        <section className={styles.get_winner_container}>
            {winner ? (
                <div>
                    <p>El ganador es: {winner}</p>
                </div>
            ) : (
                <button onClick={selectWinner} disabled={selectingWinner}>
                    {selectingWinner ? 'Seleccionando Ganador...' : 'Obtener Ganador'}
                </button>
            )}
            <div>
                <p>Participantes actuales</p>
                <p>{getCurrentsUsers.length}</p>
            </div>
        </section>
    );
}
