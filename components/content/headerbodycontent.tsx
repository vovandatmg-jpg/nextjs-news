import Image from "next/image";
import styles from "./headerbody.module.css";

export default function HeaderBodyContent() {
  return (
    <section className={styles.headerBody}>
      {/* ===== ROW 1: LEAD + SIDEBAR ===== */}
      <div className={styles.row1}>
        {/* LEFT: Lead video/article */}
        <article className={styles.left}>
          <div className={styles.video}>
            <Image
              src="/img-content.png"
              alt="img-content"
              fill
              className={styles.cover}
              priority
            />
            <button className={styles.videoPlay} aria-label="Play">
              <Image
                src="/icon.png"
                alt="play icon"
                className={styles.videoPlayIcon}
                width={25}
                height={32}
              />
            </button>
          </div>

          <div className={styles.leadBody}>
            <div className={styles.meta}>
              <span className={`${styles.tagbig} ${styles.tag}`}>
                TÀI CHÍNH
              </span>
              <span className={styles.time}>7/10 23:00</span>
            </div>

            <h2 className={styles.leadTitle}>
              <a href="#!" className={styles.sideTitleLink}>
                Chứng khoán Việt Nam sau nâng hạng Hướng đến mục tiêu 20 triệu
                tài khoản, thanh khoản 3-5 tỷ USD
              </a>
            </h2>
          </div>
        </article>

        {/* RIGHT: Sidebar 3 cards */}
        <aside className={styles.sidebar}>
          <article className={styles.sideCard}>
            <div className={styles.sideThumb}>
              <Image
                src="/img-content1.png"
                alt="side 1"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Doanh nghiệp 8 tỷ USD của Viettel đang giao dịch trên sàn
                  chứng khoán
                </a>
              </h3>
            </div>
          </article>

          <article className={styles.sideCard}>
            <div className={styles.sideThumb}>
              <Image
                src="/img-content2.png"
                alt="side 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Giá vàng sáng 6/1: Thị trường phản ứng với những tín hiệu mới
                  từ quốc tế
                </a>
              </h3>
            </div>
          </article>

          <article className={styles.sideCard}>
            <div className={styles.sideThumb}>
              <Image
                src="/img-content2.png"
                alt="side 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Samsung khẳng định sẽ sớm đưa tính năng mới lên hệ sinh thái
                </a>
              </h3>
            </div>
          </article>
        </aside>
      </div>

      {/* ===== ROW 2: CAROUSEL 3 CARDS ===== */}
      <div className={styles.row2}>
        <div className={styles.carousel}>
          <button className={styles.arrowLeft} aria-label="Next">
            ‹
          </button>
          <button className={styles.arrowRight} aria-label="Next">
            ›
          </button>
          <article className={styles.carCard}>
            <div className={styles.carThumb}>
              <Image
                src="/img-content2.png"
                alt="img 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Huyền thoại Peter Lynch tiết lộ bí quyết đơn giản để chiến
                  thắng thị trường
                </a>
              </h3>
            </div>
          </article>

          <article className={styles.carCard}>
            <div className={styles.carThumb}>
              <Image
                src="/img-content1.png"
                alt="img 1"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Huyền thoại Peter Lynch tiết lộ bí quyết đơn giản để chiến
                  thắng thị trường
                </a>
              </h3>
            </div>
          </article>

          <article className={styles.carCard}>
            <div className={styles.carThumb}>
              <Image
                src="/img-content2.png"
                alt="img 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.sideBody}>
              <div className={styles.metaSmall}>
                <span className={styles.tagSmall}>TÀI CHÍNH</span>
                <span className={styles.timeSmall}>9h trước</span>
              </div>
              <h3 className={styles.sideTitle}>
                <a href="#!" className={styles.sideTitleLink}>
                  Động thái mới của Trung Quốc về xuất khẩu đất hiếm
                </a>
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
