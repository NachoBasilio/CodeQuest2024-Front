import Image from "next/image";
import styles from "./page.module.css";
import InviteToDiscordChannel from "./components/invite-channel";
import HowGetDiscordID from "./components/tutorial-id";
export default function Home() {
  const titleWeb="{Dev/Talles} Sorteos"
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
        />
        <p>
        Sortea el 29/03/2024
        </p>
      </article>
      <section className={styles.get_in_lottery}>
        <p>
          Unete a nuestro <InviteToDiscordChannel/> y participa utilizando tu <HowGetDiscordID/>
          </p>
        <form>
          <input className={styles.get_id_discord} type="text"/>
          <button className={styles.btn_verify_id_dscord} type="submit">Participar</button>
        </form>
      </section>
    </main>);
}
