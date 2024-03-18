'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import InviteToDiscordChannel from "../components/invite-channel";
import HowGetDiscordID from "../components/tutorial-id";
import {checkDataId} from './utilities/regex'
const {getAllUsers}=require('../hooks/get-current-entries').default
export default function Home() {
  const [idDiscord, setIdDiscord]=useState({
    user_id:''
  })
  useEffect(()=>{
    const insertCurrentUsers=async()=>{
      try {
       const res= await getAllUsers()
        console.log(res)
      } catch (error) {
          console.log(error)
      }
    }
    insertCurrentUsers()
  },[])
  const titleWeb="{Dev/Talles} Sorteos"
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIdDiscord({ ...idDiscord, [name]: value });
  };
  const checkIdUser=(e)=>{
    e.preventDefault()
    if(checkDataId.test(idDiscord["user_id"])){
      console.log(idDiscord)
    }else{
      console.log("id no valido")
    }
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title_web_lottery}>{titleWeb}</h1>
      <article className={styles.reward_container}>
        <p>
       Esta notebook Asus 9953M puede ser tuya!!!
        </p>
        <Image
          src="/images.jpeg"
          alt="imagen del premio actual"
          width={200}
          height={200}
          priority={true}
        />
        <p>
        Sortea el 29/03/2024
        </p>
      </article>
      <section className={styles.get_in_lottery}>
        <p>
          Unete a nuestro <InviteToDiscordChannel/> y participa utilizando tu <HowGetDiscordID/>
          </p>
        <form onSubmit={checkIdUser} method="POST">
          <input className={styles.get_id_discord}
           type="text"
           name="user_id"
           value={idDiscord.user_id}
           onChange={handleInputChange}
           />
          <button className={styles.btn_verify_id_dscord} type="submit">Participar</button>
        </form>
      </section>
    </main>);
}
