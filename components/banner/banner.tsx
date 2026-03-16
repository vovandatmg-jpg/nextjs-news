import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/background.png"
        alt="Ultra Unfolds"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={styles.bg}
      />

      <div className={styles.overlay}>
        <div className="container"></div>
      </div>
    </section>
  );
}