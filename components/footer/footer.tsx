import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Logo */}
          <div className={styles.footerLogo}>
            <Image
              src="/layer-MC0.png"
              alt="VTV Index"
              width={240}
              height={40}
            />
          </div>

          {/* Content Wrapper */}
          <div className={styles.footerGrid}>
            {/* Column 1 */}
            <div className={styles.footerCol}>
              <p className={styles.footerText}>
                Cơ quan chủ quản: <strong>Đài Truyền hình Việt Nam</strong>
              </p>
              <p className={styles.footerText}>
                Cơ quan báo chí: <strong>Thời báo VTV</strong>
              </p>
              <p className={styles.footerInfo}>
                Giấy phép hoạt động báo in và báo điện tử số 483/GP-BTTTT cấp
                ngày 11/11/2025
              </p>
            </div>

            {/* Column 2 */}
            <div className={styles.footerCol}>
              <p className={styles.footerTitle}>Về chúng tôi</p>
              <p className={styles.footerText}>
                <strong>Điều khoản và điều kiện sử dụng</strong>
              </p>
              <div className={styles.footerContact}>
                <p className={styles.contactInfo}>
                  Hotline ban đoc:{" "}
                  <span className={styles.contactNumber}>024.66 897 897</span>
                </p>
                <p className={styles.contactInfo}>
                  Liên hệ quảng cáo:{" "}
                  <span className={styles.contactNumber}>0907405408</span>
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerTitle}>Theo dõi chúng tôi trên</h4>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <Image src="/YT.png" alt="Youtube" width={24} height={24} />
                  <span>Youtube</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <Image src="/FB.png" alt="Facebook" width={24} height={24} />
                  <span>Facebook</span>
                </a>
                <a href="#" className={styles.socialLink}>
                  <Image src="/TT.png" alt="Tiktok" width={24} height={24} />
                  <span>Tiktok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© Copyright 2025 - VTV Index</p>
        </div>
      </div>
    </footer>
  );
}
