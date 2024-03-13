import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const titleWeb="{Dev/Talles} Sorteos"
  return (
    <main className={styles.main}>
      <h3 className={styles.title_web_lottery}>{titleWeb}</h3>
      <article className={styles.reward_container}>
        <p>
        titulo del Sorteos
        </p>
        <Image
          src="/next.svg"
          alt="imagen del premio actual"
          width={200}
          height={200}
        />
        <p>
        foto del premio
        contador u rango de fecha
        </p>
      </article>
      <section className={styles.get_in_lottery}>
        <p>
          Unete a nuestro canal de discord y participa con tu ID de discord
          </p>
        <form>
          <input className={styles.get_id_discord} type="text"/>
          <button className={styles.btn_verify_id_dscord} type="submit">Participar</button>
        </form>
      </section>
    </main>
  );
}
