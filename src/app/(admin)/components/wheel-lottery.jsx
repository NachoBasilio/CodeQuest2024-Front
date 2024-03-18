'use client'
import { useState } from 'react';
import styles from '../auth/auth.module.css';

export default function GetAWinner() {
    const [participants, setParticipants] = useState([]);
    const [winner, setWinner] = useState(null);
    const [selectingWinner, setSelectingWinner] = useState(false);

    const arr = [
        { id: 1, name: 'lauta' },
        { id: 2, name: 'lauta' },
        { id: 3, name: 'lauta' },
        { id: 4, name: 'lauta' },
        { id: 5, name: 'lauta' }
    ];

    // Función para seleccionar un ganador al azar
    const selectWinner = () => {
        setSelectingWinner(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * participants.length);
            setWinner(participants[randomIndex]);
            setSelectingWinner(false);
        }, 2000); // Simular un retardo de 2 segundos para el efecto del spinner
    };

    return (
        <section className={styles.get_winner_container}>
            <button onClick={() => selectWinner()} disabled={selectingWinner}>
                {selectingWinner ? 'Seleccionando Ganador...' : 'Obtener Ganador'}
            </button>
            {selectingWinner && <div className={styles.spinner}></div>}
            {!selectingWinner && (
                <div>
                    <p>{winner === null ? 'Cantidad de participantes' : 'Ganador'}</p>
                    {winner && (
                        <p>{winner.name}</p>
                    )}
                </div>
            )}
        </section>
    );
}

