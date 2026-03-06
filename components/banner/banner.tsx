import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner}>
      {/* background */}
      <Image
        src="/background.png"
        alt="Ultra Unfolds"
        fill
        priority
        className={styles.bg}
      />

      {/* overlay tối giữa ảnh */}
      <div className={styles.overlay}>
        <div className="container">
          {/* <div className={styles.text}>
            <h1>Ultra Unfolds</h1>
            <h2>Galaxy Z Fold7</h2>
          </div> */}
        </div>
      </div>
    </section>
  );
}
