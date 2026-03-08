import styles from "./bbodycontent.module.css";
import Image from "next/image";
export default function BigbodyContent() {
  return (
    <section className={styles.bbodyContent}>
      {/* ===== ROW 9: BẤT ĐỘNG SẢN ===== */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryHeader}>
          <Image src="/union.png" alt="union" width={12} height={12} />
          <h3 className={styles.categoryTitle}>BẤT ĐỘNG SẢN</h3>
        </div>

        <div className={styles.categoryList}>
          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn1.png"
                alt="bds 1"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>8h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Hòa Phát lãi 383 tỷ đồng trong quý 1/2023
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn2.png"
                alt="bds 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>8h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Hòa Phát lãi 383 tỷ đồng trong quý 1/2023
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn3.png"
                alt="bds 3"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>KINH TẾ</span>
                <span className={styles.categoryTime}>5h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Chỉ số giá tiêu dùng tăng 2% trong tháng 9
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn4.png"
                alt="bds 4"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>THỊ TRƯỜNG</span>
                <span className={styles.categoryTime}>7h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                VN-Index tăng 15 điểm, thu hút dòng tiền lớn
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn1.png"
                alt="bds 5"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>THỊ TRƯỜNG</span>
                <span className={styles.categoryTime}>7h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                VN-Index tăng 15 điểm, thu hút dòng tiền lớn
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn2.png"
                alt="bds 6"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>KINH TẾ</span>
                <span className={styles.categoryTime}>5h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Chỉ số giá tiêu dùng tăng 2% trong tháng 9
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* ===== ROW 10: DOANH NGHIỆP ===== */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryHeader}>
          <Image src="/union.png" alt="union" width={12} height={12} />
          <h3 className={styles.categoryTitle}>DOANH NGHIỆP</h3>
        </div>

        <div className={`${styles.categoryList} ${styles.categoryList4}`}>
          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn1.png"
                alt="dn 1"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                FTSE Russell chỉ ra 2 ý nghĩa lớn khi thị trường chứng khoán
                Việt Nam được nâng hạng
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn2.png"
                alt="dn 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Động thái mới của Trung Quốc về xuất khẩu đất hiếm
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn3.png"
                alt="dn 3"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Từ ngày 1/11, chuyển tiền từ 500 triệu đồng buộc phải cung cấp
                đầy đủ dữ liệu cá nhân giao dịch
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn4.png"
                alt="dn 4"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Động thái mới của Trung Quốc về xuất khẩu đất hiếm
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn1.png"
                alt="dn 5"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                FTSE Russell chỉ ra 2 ý nghĩa lớn khi thị trường chứng khoán
                Việt Nam được nâng hạng
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn2.png"
                alt="dn 6"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Động thái mới của Trung Quốc về xuất khẩu đất hiếm
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn3.png"
                alt="dn 7"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Từ ngày 1/11, chuyển tiền từ 500 triệu đồng buộc phải cung cấp
                đầy đủ dữ liệu cá nhân giao dịch
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn4.png"
                alt="dn 8"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>9h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Động thái mới của Trung Quốc về xuất khẩu đất hiếm
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* ===== row10: the gioi ===== */}

      <div className={`${styles.categorySection} ${styles.mt60} ${styles.scroll}`}>
        <div className={styles.categoryHeader}>
          <Image src="/union.png" alt="union" width={12} height={12} />
          <h3 className={styles.categoryTitle}>THẾ GIỚI</h3>
        </div>

        <div className={`${styles.categoryList} ${styles.categoryCol}`}>
          <div className={styles.categoryLeft}>
            <article className={styles.categoryLeftCard}>
              <div className={styles.categoryTGThumb}>
                <Image
                  src="/bds-dn1.png"
                  alt="bds 1"
                  fill
                  className={styles.cover}
                />
              </div>
              <div className={styles.categoryLeftBody}>
                <div className={styles.categoryLeftMeta}>
                  <span className={styles.categoryLeftTag}>TÀI CHÍNH</span>
                  <span className={styles.categoryLeftTime}>8h trước</span>
                </div>
                <a href="!#" className={styles.categoryLeftCardTitle}>
                  Lợi suất tăng mạnh nhất 31 năm làm rung chuyển thị trường trái
                  phiếu Nhật Bản: Chuyện gì đây?
                </a>
                <p className={styles.categoryLeftCardDesc}>
                  Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                  Lending) tại Việt Nam đang định hình sân chơi mới, mang đến cả
                  cơ hội và thách thức cho các...
                </p>
              </div>
            </article>

            <article className={styles.categoryLeftCard}>
              <div className={styles.categoryTGThumb}>
                <Image
                  src="/bds-dn2.png"
                  alt="bds 2"
                  fill
                  className={styles.cover}
                />
              </div>
              <div className={styles.categoryLeftBody}>
                <div className={styles.categoryLeftMeta}>
                  <span className={styles.categoryLeftTag}>TÀI CHÍNH</span>
                  <span className={styles.categoryLeftTime}>8h trước</span>
                </div>
                <a href="!#" className={styles.categoryLeftCardTitle}>
                  Ấn Độ nuôi hơn 500 triệu con bò nhưng không ăn thịt, biến chất
                  thải của chúng thành mỏ vàng tỷ đô
                </a>
                <p className={styles.categoryLeftCardDesc}>
                  Với kết quả tích cực từ hoạt động tự doanh, tư vấn tài chính
                  và cho vay, CTCP Chứng khoán VPBank (VPBankS) lãi trước thuế
                  gần 2.4 ngàn tỷ đồng trong quý 3 và gần 3.3 ngàn tỷ đồng lũy
                  kế{" "}
                </p>
              </div>
            </article>

            <article className={styles.categoryLeftCard}>
              <div className={styles.categoryTGThumb}>
                <Image
                  src="/bds-dn3.png"
                  alt="bds 3"
                  fill
                  className={styles.cover}
                />
              </div>
              <div className={styles.categoryLeftBody}>
                <div className={styles.categoryLeftMeta}>
                  <span className={styles.categoryLeftTag}>KINH TẾ</span>
                  <span className={styles.categoryLeftTime}>5h trước</span>
                </div>
                <a href="!#" className={styles.categoryLeftCardTitle}>
                  Hôm nay, Warren Buffett chính thức rời ghế CEO Berkshire
                  Hathaway, để lại 5 bài học đầu tư đắt giá vượt thời gian
                </a>
                <p className={styles.categoryLeftCardDesc}>
                  Kết phiên 09/10, các chỉ số chính trên thị trường chứng khoán
                  Việt Nam đồng loạt đóng cửa trong sắc xanh
                </p>
              </div>
            </article>
          </div>

          <div className={styles.categoryRight}>
            <p className={styles.categoryRightItem}>
              Nhà đầu tư chứng khoán đừng "vội mừng" khi Fed hạ lãi suất
            </p>
            <p className={styles.categoryRightItem}>
              Bitcoin giữ vững mốc 116.000 USD khi giới đầu tư chờ động thái từ
              Fed
            </p>
            <p className={styles.categoryRightItem}>
              PNJ lần thứ hai liên tiếp lọt vào top Fortune 500 Đông Nam Á
            </p>
            <p className={styles.categoryRightItem}>
              Chỉ số lương McWages cũng được tính theo giá bánh mì kẹp thịt
            </p>
            <p className={styles.categoryRightItem}>
              Lịch sự kiện và tin vắn chứng khoán ngày 18/9/2025
            </p>
          </div>
        </div>
      </div>
      {/* ===== ROW 11: bigimg ===== */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryBigImg}>
          <Image src="/bigimg.png" alt="bigimg" fill className={styles.cover} />
        </div>
      </div>

      {/* === ROW 12: THI TRUONG === */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryHeader}>
          <Image src="/union.png" alt="union" width={12} height={12} />
          <h3 className={styles.categoryTitle}>THỊ TRƯỜNG</h3>
        </div>

        <div className={styles.marketGrid}>
          <div className={styles.marketLeft}>
            {/* Row 1 - 2 cards */}
            <div className={styles.marketRow}>
              <article className={styles.marketCard}>
                <div className={styles.marketCardThumb}>
                  <Image
                    src="/bds-dn1.png"
                    alt="market 1"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.marketCardBody}>
                  <div className={styles.marketMeta}>
                    <span className={styles.marketTag}>TÀI CHÍNH</span>
                    <span className={styles.marketTime}>8h trước</span>
                  </div>
                  <a href="!#" className={styles.marketCardTitle}>
                    Từ ngày 1/11, chuyển tiền từ 500 triệu đồng bắt buộc phải
                    cung cấp đầy đủ dữ liệu cá nhân và giao dịch
                  </a>
                </div>
              </article>

              <article className={styles.marketCard}>
                <div className={styles.marketCardThumb}>
                  <Image
                    src="/bds-dn2.png"
                    alt="market 2"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.marketCardBody}>
                  <div className={styles.marketMeta}>
                    <span className={styles.marketTag}>THỊ TRƯỜNG</span>
                    <span className={styles.marketTime}>7h trước</span>
                  </div>
                  <a href="!#" className={styles.marketCardTitle}>
                    VN-Index tăng 15 điểm, thu hút dòng tiền lớn
                  </a>
                </div>
              </article>
            </div>

            {/* Row 2 - 2 cards */}
            <div className={styles.marketRow}>
              <article className={styles.marketCard}>
                <div className={styles.marketCardThumb}>
                  <Image
                    src="/bds-dn3.png"
                    alt="market 3"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.marketCardBody}>
                  <div className={styles.marketMeta}>
                    <span className={styles.marketTag}>KINH TẾ</span>
                    <span className={styles.marketTime}>5h trước</span>
                  </div>
                  <a href="!#" className={styles.marketCardTitle}>
                    Chỉ số giá tiêu dùng tăng 2% trong tháng 9
                  </a>
                </div>
              </article>

              <article className={styles.marketCard}>
                <div className={styles.marketCardThumb}>
                  <Image
                    src="/bds-dn4.png"
                    alt="market 4"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.marketCardBody}>
                  <div className={styles.marketMeta}>
                    <span className={styles.marketTag}>TÀI CHÍNH</span>
                    <span className={styles.marketTime}>9h trước</span>
                  </div>
                  <a href="!#" className={styles.marketCardTitle}>
                    Động thái mới của Trung Quốc về xuất khẩu đất hiếm
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div className={styles.marketRight}>
            <article className={styles.marketFeaturedCard}>
              <div className={styles.marketFeaturedThumb}>
                <Image
                  src="/bds-dn1.png"
                  alt="featured"
                  fill
                  className={styles.cover}
                />
              </div>
              <div className={styles.marketFeaturedBody}>
                <p className={styles.marketFeaturedTitle}>
                  Bitcoin giữ vững mức 116.000 USD khi giới đầu từ chờ động thái
                  từ Fed
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* ===== ROW 12: Kinh te vi mo - Dau tu===== */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryHeader}>
          <Image src="/union.png" alt="union" width={12} height={12} />
          <h3 className={styles.categoryTitle}>KINH TẾ VĨ MÔ - ĐẦU TƯ</h3>
        </div>

        <div className={styles.categoryList}>
          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/KTVM.png"
                alt="bds 1"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>8h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                FTSE Russell chỉ ra 2 ý nghĩa lớn khi thị trường chứng khoán
                Việt Nam được nâng hạng
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/KTVM (2).png"
                alt="bds 2"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>TÀI CHÍNH</span>
                <span className={styles.categoryTime}>8h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Hòa Phát lãi 383 tỷ đồng trong quý 1/2023
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn3.png"
                alt="bds 3"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>KINH TẾ</span>
                <span className={styles.categoryTime}>5h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Chỉ số giá tiêu dùng tăng 2% trong tháng 9
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn4.png"
                alt="bds 4"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>THỊ TRƯỜNG</span>
                <span className={styles.categoryTime}>7h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                VN-Index tăng 15 điểm, thu hút dòng tiền lớn
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn1.png"
                alt="bds 5"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>THỊ TRƯỜNG</span>
                <span className={styles.categoryTime}>7h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                VN-Index tăng 15 điểm, thu hút dòng tiền lớn
              </a>
            </div>
          </article>

          <article className={styles.categoryCard}>
            <div className={styles.categoryThumb}>
              <Image
                src="/bds-dn2.png"
                alt="bds 6"
                fill
                className={styles.cover}
              />
            </div>
            <div className={styles.categoryBody}>
              <div className={styles.categoryMeta}>
                <span className={styles.categoryTag}>KINH TẾ</span>
                <span className={styles.categoryTime}>5h trước</span>
              </div>
              <a href="!#" className={styles.categoryCardTitle}>
                Chỉ số giá tiêu dùng tăng 2% trong tháng 9
              </a>
            </div>
          </article>
        </div>
      </div>
      {/* ===== ROW 13: CONG NGHE ===== */}
      <div className={`${styles.categorySection} ${styles.mt60}`}>
        <div className={styles.categoryThreeRow}>
          <div className={styles.categoryTwoRow}>
            {/* row1 */}
            <div className={styles.categoryRow1}>
              <div className={styles.categoryHeader}>
                <Image src="/union.png" alt="union" width={12} height={12} />
                <h3 className={styles.categoryTitle}>CÔNG NGHỆ</h3>
              </div>
              <div className={styles.marketRow}>
                <article className={styles.marketCard}>
                  <div className={styles.marketCardThumb}>
                    <Image
                      src="/bds-dn1.png"
                      alt="market 1"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.marketCardBody}>
                    <div className={styles.marketMeta}>
                      <span className={styles.marketTag}>TÀI CHÍNH</span>
                      <span className={styles.marketTime}>8h trước</span>
                    </div>
                    <a href="!#" className={styles.marketCardTitle}>
                      Từ ngày 1/11, chuyển tiền từ 500 triệu đồng buộc phải cung
                      cấp
                    </a>
                  </div>
                </article>

                <article className={styles.marketCard}>
                  <div className={styles.marketCardThumb}>
                    <Image
                      src="/bds-dn2.png"
                      alt="market 2"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.marketCardBody}>
                    <div className={styles.marketMeta}>
                      <span className={styles.marketTag}>THỊ TRƯỜNG</span>
                      <span className={styles.marketTime}>7h trước</span>
                    </div>
                    <a href="!#" className={styles.marketCardTitle}>
                      VN-Index tăng 15 điểm, thu hút dòng tiền lớn
                    </a>
                  </div>
                </article>
              </div>

              {/* Row 2 - 2 cards */}
              <div className={styles.marketRow}>
                <article className={styles.marketCard}>
                  <div className={styles.marketCardThumb}>
                    <Image
                      src="/bds-dn3.png"
                      alt="market 3"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.marketCardBody}>
                    <div className={styles.marketMeta}>
                      <span className={styles.marketTag}>KINH TẾ</span>
                      <span className={styles.marketTime}>5h trước</span>
                    </div>
                    <a href="!#" className={styles.marketCardTitle}>
                      Chỉ số giá tiêu dùng tăng 2% trong tháng 9
                    </a>
                  </div>
                </article>

                <article className={styles.marketCard}>
                  <div className={styles.marketCardThumb}>
                    <Image
                      src="/bds-dn4.png"
                      alt="market 4"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.marketCardBody}>
                    <div className={styles.marketMeta}>
                      <span className={styles.marketTag}>TÀI CHÍNH</span>
                      <span className={styles.marketTime}>9h trước</span>
                    </div>
                    <a href="!#" className={styles.marketCardTitle}>
                      Động thái mới của Trung Quốc về xuất khẩu đất hiếm
                    </a>
                  </div>
                </article>
              </div>
            </div>

            {/* row2 */}
            <div className={styles.categoryRow2}>
              <div className={styles.categoryHeader}>
                <Image src="/union.png" alt="union" width={12} height={12} />
                <h3 className={styles.categoryTitle}>ĐỜI SỐNG</h3>
              </div>

              <div className={` ${styles.newsList} ${styles.scroll}`}>
                {/* item 1 */}
                <article className={styles.listItem}>
                  <div className={styles.listThumb}>
                    <Image
                      src="/img-content2.png"
                      alt="thumb"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.listBody}>
                    <div className={styles.listMeta}>
                      <span className={styles.listTag}>Tài chính</span>
                      <span className={styles.listTime}>9h trước</span>
                    </div>

                    <a href="!#" className={styles.listTitle}>
                      Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                      lại thị trường
                    </a>

                    <p className={styles.listDesc}>
                      Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                      Lending) tại Việt Nam đang định hình sân chơi mới, mang
                      đến cả cơ hội và thách thức cho các...
                    </p>
                  </div>
                </article>

                {/* item 2 */}
                <article className={styles.listItem}>
                  <div className={styles.listThumb}>
                    <Image
                      src="/img-content1.png"
                      alt="thumb"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.listBody}>
                    <div className={styles.listMeta}>
                      <span className={styles.listTag}>Tài chính</span>
                      <span className={styles.listTime}>9h trước</span>
                    </div>

                    <a href="!#" className={styles.listTitle}>
                      VPBankS công bố lợi nhuận kỷ lục trước thêm IPO
                    </a>

                    <p className={styles.listDesc}>
                      Với kết quả tích cực trong hoạt động kinh doanh, tổ chức
                      tài chính tiếp tục mở rộng hệ sinh thái...
                    </p>
                  </div>
                </article>

                {/* item 3 */}
                <article className={styles.listItem}>
                  <div className={styles.listThumb}>
                    <Image
                      src="/img-content2.png"
                      alt="thumb"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.listBody}>
                    <div className={styles.listMeta}>
                      <span className={styles.listTag}>Thị trường</span>
                      <span className={styles.listTime}>9h trước</span>
                    </div>

                    <a href="!#" className={styles.listTitle}>
                      Nhịp đập thị trường 09/10: Lần đầu vượt 1,700 điểm
                    </a>

                    <p className={styles.listDesc}>
                      Kết phiên, các chỉ số chính trên thị trường chứng khoán
                      Việt Nam đồng loạt đóng cửa trong sắc xanh...
                    </p>
                  </div>
                </article>

                {/* item 4 */}
                <article className={styles.listItem}>
                  <div className={styles.listThumb}>
                    <Image
                      src="/img-content1.png"
                      alt="thumb"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.listBody}>
                    <div className={styles.listMeta}>
                      <span className={styles.listTag}>Tài chính</span>
                      <span className={styles.listTime}>9h trước</span>
                    </div>

                    <a href="!#" className={styles.listTitle}>
                      VPBankS công bố lợi nhuận kỷ lục trước thêm IPO
                    </a>

                    <p className={styles.listDesc}>
                      Với kết quả tích cực trong hoạt động kinh doanh, tổ chức
                      tài chính tiếp tục mở rộng hệ sinh thái...
                    </p>
                  </div>
                </article>

                {/* item 5 */}
                <article className={styles.listItem}>
                  <div className={styles.listThumb}>
                    <Image
                      src="/img-content1.png"
                      alt="thumb"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.listBody}>
                    <div className={styles.listMeta}>
                      <span className={styles.listTag}>Tài chính</span>
                      <span className={styles.listTime}>9h trước</span>
                    </div>

                    <a href="!#" className={styles.listTitle}>
                      VPBankS công bố lợi nhuận kỷ lục trước thêm IPO
                    </a>

                    <p className={styles.listDesc}>
                      Với kết quả tích cực trong hoạt động kinh doanh, tổ chức
                      tài chính tiếp tục mở rộng hệ sinh thái...
                    </p>
                  </div>
                </article>

                
                
              </div>
            </div>
          </div>
          {/* row 3 right */}
          <div className={styles.categoryRow3}>
            <div className={styles.categoryHeader}>
              <Image src="/union.png" alt="union" width={12} height={12} />
              <h3 className={styles.categoryTitle}>GÓC NHÌN CHUYÊN GIA</h3>
            </div>

            <div className={styles.expertCards}>
              {/* Expert Card 1 */}
              <article className={styles.expertCard}>
                <div className={styles.expertThumb}>
                  <Image
                    src="/img1.png"
                    alt="expert"
                    fill
                    className={styles.cover}
                  />
                  <div className={styles.expertOverlay1}></div>
                  <div className={styles.expertLabel}>
                    PODCAST - BẤT ĐỘNG SẢN
                  </div>
                  <div className={styles.expertPlayBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white" />
                      <path d="M10 8L16 12L10 16V8Z" fill="#0f172a" />
                    </svg>
                  </div>
                  <h4 className={styles.expertTitle}>
                    LƯU Ý GI
                    <br />
                    KHI ĐẦU TƯ
                    <br />
                    ĐẤT TỈNH
                  </h4>
                </div>
                <div className={styles.expertInfo}>
                  <p className={styles.expertMeta}>Chuyên gia bất động sản</p>
                  <p className={styles.expertName}>Anh Thu</p>
                </div>
              </article>

              {/* Expert Card 2 */}
              <article className={styles.expertCard}>
                <div className={styles.expertThumb}>
                  <Image
                    src="/img2.png"
                    alt="expert"
                    fill
                    className={styles.cover}
                  />
                  <div className={styles.expertOverlay2}></div>
                  <div className={styles.expertLabel}>PODCAST - KHỞ NGHIỆP</div>
                  <div className={styles.expertPlayBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white" />
                      <path d="M10 8L16 12L10 16V8Z" fill="#0f172a" />
                    </svg>
                  </div>
                  <h4 className={styles.expertTitle}>
                    CHƠI VÀNG
                    <br />
                    BUÔN XẲNG
                    <br />
                    BÁN SÁCH
                  </h4>
                </div>
                <div className={styles.expertInfo}>
                  <p className={styles.expertMeta}>CEO SAIGON BOOKS</p>
                  <p className={styles.expertName}>Nguyễn Tuấn Quỳnh</p>
                </div>
              </article>

              {/* Expert Card 3 */}
              <article className={styles.expertCard}>
                <div className={styles.expertThumb}>
                  <Image
                    src="/img3.png"
                    alt="expert"
                    fill
                    className={styles.cover}
                  />
                  <div className={styles.expertOverlay3}></div>
                  <div className={styles.expertLabel}>PODCAST - KHÓ NGHIỆP</div>
                  <div className={styles.expertPlayBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white" />
                      <path d="M10 8L16 12L10 16V8Z" fill="#0f172a" />
                    </svg>
                  </div>
                  <h4 className={styles.expertTitle}>
                    SỐNG
                    <br />
                    NHƯ MỘT
                    <br />
                    NHÀ ĐẦU TƯ
                  </h4>
                </div>
                <div className={styles.expertInfo}>
                  <p className={styles.expertMeta}>Chuyên gia đầu tư -</p>
                  <p className={styles.expertName}>Võ Diệp Thanh Thoại</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
