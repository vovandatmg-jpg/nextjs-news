"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./content.module.css";
import BigbodyContent from "./bigbodycontent";
import HeaderBodyContent from "./headerbodycontent";
export default function Content() {
  const [bulletinTab, setBulletinTab] = useState("event");
  const [stockTab, setStockTab] = useState("volume");
  const [featureTab, setFeatureTab] = useState("magazine");
  return (
    <section className={styles.section}>
      <div className="container">
        <HeaderBodyContent />
        {/* ===== MAIN WRAPPER: 2 CỘT TRÁI-PHẢI ===== */}
        <div className={styles.mainWrapper}>
          {/* ===== CỘT TRÁI: NỘI DUNG CHÍNH ===== */}
          <div className={styles.mainLeft}>
            {/* CHỦ ĐỀ + TIN CHÍNH */}
            <div className={styles.topicBar}>
              <h3 className={styles.topicTitle}>CHỦ ĐỀ</h3>

              <div className={styles.pills}>
                <button className={styles.pill}>Nhìn lại 2025</button>
                <button className={styles.pill}>Xe hay</button>
                <button className={styles.pill}>AI</button>
                <button className={styles.pill}>Theo dõi cá mập</button>
                <button className={styles.pill}>Góc nhìn thị trường</button>
              </div>
            </div>

            <div className={`${styles.sectionHead} ${styles.mt60}`}>
              <Image src="/union.png" alt="union" width={12} height={12} />
              <div className={styles.blockTitle}>TIN CHÍNH</div>
            </div>

            <div className={styles.newsList}>
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
                    Lending) tại Việt Nam đang định hình sản phẩm mới, mang đến
                    cơ hội và thách thức...
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
                    Với kết quả tích cực trong hoạt động kinh doanh, tổ chức tài
                    chính tiếp tục mở rộng hệ sinh thái...
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
                    Với kết quả tích cực từ hoạt động tự doanh, tư vấn tài chính
                    và cho vay, CTCP Chứng khoán VPBank (VPBankS) lãi trước thuế
                    gần 2.4 ngàn tỷ đồng trong quý 3 và gần 3.3 ngàn tỷ đồng lũy
                    kế
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
                    Với kết quả tích cực trong hoạt động kinh doanh, tổ chức tài
                    chính tiếp tục mở rộng hệ sinh thái...
                  </p>
                </div>
              </article>

              {/* item 5 */}
              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                    lại thị trường
                  </a>

                  <p className={styles.listDesc}>
                    Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                    Lending) tại Việt Nam đang định hình sân chơi mới, mang đến
                    cả cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                    lại thị trường
                  </a>

                  <p className={styles.listDesc}>
                    Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                    Lending) tại Việt Nam đang định hình sân chơi mới, mang đến
                    cả cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                    lại thị trường
                  </a>

                  <p className={styles.listDesc}>
                    Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                    Lending) tại Việt Nam đang định hình sân chơi mới, mang đến
                    cả cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                    lại thị trường
                  </a>

                  <p className={styles.listDesc}>
                    Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                    Lending) tại Việt Nam đang định hình sân chơi mới, mang đến
                    cả cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình
                    lại thị trường
                  </a>

                  <p className={styles.listDesc}>
                    Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                    Lending) tại Việt Nam đang định hình sân chơi mới, mang đến
                    cả cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>
            </div>

            {/* CHUYÊN ĐỀ */}
            <div className={styles.sectionHead}>
              <div className={`${styles.sectionHeadRow} ${styles.mt60}`}>
                <Image src="/union.png" alt="union" width={12} height={12} />
                <h3 className={styles.sectionTitle}>CHUYÊN ĐỀ</h3>
              </div>
            </div>

            <div>
              <Image
                src="/backgroundCD1.png"
                alt="bg"
                fill
                className={styles.background}
              />
            </div>
            <div className={styles.specialStrip}>
              <article className={styles.specialCard}>
                <div className={styles.specialThumb}>
                  <Image
                    src="/Chuyende1.png"
                    alt="sp1"
                    fill
                    className={styles.cover}
                  />
                </div>
                <h4 className={styles.specialTitle}>
                  <a href="!#" className={styles.specialTitleLink}>
                    Lên trình Selfie với FlexCam 50 MP
                  </a>
                </h4>
                <p className={styles.specialDesc}>
                  Chụp ảnh selfie sắc nét, chi tiết hơn với thao tác tối giản
                  trực tiếp từ màn hình ngoài. Camera 50 MP độ phân giải siêu
                  cao
                </p>
              </article>

              <article className={styles.specialCard}>
                <div className={styles.specialThumb}>
                  <Image
                    src="/Chuyende2.png"
                    alt="sp2"
                    fill
                    className={styles.cover}
                  />
                </div>
                <h4 className={styles.specialTitle}>
                  <a href="!#" className={styles.specialTitleLink}>
                    Mãn nhãn từ trong ra ngoài
                  </a>
                </h4>
                <p className={styles.specialDesc}>
                  Pin 4000 mAh kết hợp cùng bộ xử lý tối ưu vượt trội, đảm bảo
                  hàng giờ giải trí mượt mà trên màn hình chính
                </p>
              </article>

              <article className={styles.specialCard}>
                <div className={styles.specialThumb}>
                  <Image
                    src="/Chuyende3.png"
                    alt="sp3"
                    fill
                    className={styles.cover}
                  />
                </div>
                <h4 className={styles.specialTitle}>
                  <a href="!#" className={styles.specialTitleLink}>
                    Cuộc sống kết nối với Galaxy
                  </a>
                </h4>
                <p className={styles.specialDesc}>
                  Kết nối Galaxy Z Flip7 FE của bạn với Galaxy Watch8, Buds3 Pro
                  và các thiết bị Samsung Galaxy khác để tận hưởng trải nghiệm
                  sống liền mạch và thông minh hơn
                </p>
              </article>

              <article className={styles.specialBGCard}>
                <div className={styles.specialBGThumb}>
                  <Image
                    src="/Chuyende4.png"
                    alt="sp4"
                    fill
                    className={styles.cover}
                  />
                </div>
                <h4 className={styles.specialBGTitle}>
                  Galaxy Fold7 | Z Flip7
                </h4>
              </article>
            </div>

            {/* TÀI CHÍNH NGÂN HÀNG */}
            <div className={styles.sectionHead}>
              <div className={`${styles.sectionHeadRow} ${styles.mt60}`}>
                <Image src="/union.png" alt="union" width={12} height={12} />
                <h3 className={styles.sectionTitle}>TÀI CHÍNH NGÂN HÀNG</h3>
              </div>
            </div>
            <div className={styles.newsList}>
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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình lại
                    thị trường
                  </a>
                 <p className={styles.listDesc}>
                   Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                   Lending) tại Việt Nam đang định hình sân chơi mới, mang đến cả
                    cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

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
                    Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định hình lại
                    thị trường
                  </a>
                 <p className={styles.listDesc}>
                   Khung pháp lý mới cho hoạt động cho vay ngang hàng (P2P
                   Lending) tại Việt Nam đang định hình sân chơi mới, mang đến cả
                    cơ hội và thách thức cho các...
                  </p>
                </div>
              </article>

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
                    Với kết quả tích cực từ hoạt động tự doanh, tư vấn tài chính
                    và cho vay, CTCP Chứng khoán VPBank (VPBankS) lãi trước thuế
                    gần 2.4 ngàn tỷ đồng trong quý 3 và gần 3.3 ngàn tỷ đồng lũy
                    kế
                  </p>
                </div>
              </article>

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
                    Các chỉ số chính trên thị trường chứng khoán Việt Nam đồng
                    loạt đóng cửa trong sắc xanh...
                  </p>
                </div>
              </article>

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
                    Với kết quả tích cực từ hoạt động tự doanh, tư vấn tài chính
                    và cho vay, CTCP Chứng khoán VPBank (VPBankS) lãi trước thuế
                    gần 2.4 ngàn tỷ đồng trong quý 3 và gần 3.3 ngàn tỷ đồng lũy
                    kế
                  </p>
                </div>
              </article>

              <article className={`${styles.listItem} ${styles.listItemLast}`}>
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
                    Các chỉ số chính trên thị trường chứng khoán Việt Nam đồng
                    loạt đóng cửa trong sắc xanh...
                  </p>
                </div>
              </article>
            </div>
            {/* ===== ROW 6: VIDEO NỔI BẬT ===== */}
            <div className={`${styles.row6} ${styles.mt60}`}>
              <div className={styles.colLeft}>
                <div className={styles.sectionHead}>
                  <Image src="/union.png" alt="union" width={12} height={12} />
                  <h3 className={styles.sectionTitle}>VIDEO NỔI BẬT</h3>
                </div>

                <div className={styles.videoList}>
                  <div className={styles.videoMain}>
                    <Image
                      src="/video.gif"
                      alt="video main"
                      fill
                      className={styles.cover}
                    />
                  </div>

                  <div className={styles.videoMiniList}>
                    <article className={styles.videoMini}>
                      <div className={styles.videoMiniThumb}>
                        <Image
                          src="/video1.png"
                          alt="v1"
                          fill
                          className={styles.cover}
                        />
                      </div>
                      <h4 className={styles.videoMiniTitle}>
                        <a href="#!" className={styles.videoMiniLink}>
                          Chứng khoán "sửa chân" đầu năm
                        </a>
                      </h4>
                    </article>

                    <article className={styles.videoMini}>
                      <div className={styles.videoMiniThumb}>
                        <Image
                          src="/video2.png"
                          alt="v2"
                          fill
                          className={styles.cover}
                        />
                      </div>
                      <h4 className={styles.videoMiniTitle}>
                        <a href="#!" className={styles.videoMiniLink}>
                          "Kỷ luật" dòng tiền cá nhân
                        </a>
                      </h4>
                    </article>

                    <article className={styles.videoMini}>
                      <div className={styles.videoMiniThumb}>
                        <Image
                          src="/video3.png"
                          alt="v3"
                          fill
                          className={styles.cover}
                        />
                      </div>
                      <h4 className={styles.videoMiniTitle}>
                        <a href="#!" className={styles.videoMiniLink}>
                          Vàng lập đỉnh, USD biến động
                        </a>
                      </h4>
                    </article>

                    <article className={styles.videoMini}>
                      <div className={styles.videoMiniThumb}>
                        <Image
                          src="/video4.png"
                          alt="v4"
                          fill
                          className={styles.cover}
                        />
                      </div>
                      <h4 className={styles.videoMiniTitle}>
                        <a href="#!" className={styles.videoMiniLink}>
                          Dẫn dắt bởi cổ phiếu ngân hàng
                        </a>
                      </h4>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== CỘT PHẢI: WIDGETS ===== */}
          <aside className={styles.mainRight}>
            {/* BẢNG TIN */}
            <section className={styles.widget}>
              <div className={styles.widgetHead}>
                <h3 className={styles.widgetTitle}>BẢNG TIN</h3>

                <div className={styles.tabs}>
                  <button
                    className={`${styles.tab} ${bulletinTab === "event" ? styles.activeTab : ""}`}
                    onClick={() => setBulletinTab("event")}
                  >
                    LỊCH SỰ KIỆN
                  </button>
                  <button
                    className={`${styles.tab} ${bulletinTab === "move" ? styles.activeTab : ""}`}
                    onClick={() => setBulletinTab("move")}
                  >
                    THÔNG TIN CÔNG BỐ
                  </button>
                </div>
              </div>

              <div className={styles.bulletin}>
                <div className={styles.bRow}>
                  <span className={styles.bCode}>PBC</span>
                  <div className={styles.bBody}>
                    <a href="#!" className={styles.bTitleLink}>
                      PBC: Ngày 16/10/2025, Thông báo ngày giao dịch đầu tiên
                      đăng ký
                    </a>
                    <div className={styles.bTime}>05/10/2025</div>
                  </div>
                </div>

                <div className={styles.bRow}>
                  <span className={styles.bCode}>NTC</span>
                  <div className={styles.bBody}>
                    <a href="#!" className={styles.bTitleLink}>
                      CC: Điều chỉnh doanh nghiệp do thay đổi ngày giao dịch
                    </a>
                    <div className={styles.bTime}>05/10/2025</div>
                  </div>
                </div>

                <div className={styles.bRow}>
                  <span className={styles.bCode}>PBC</span>
                  <div className={styles.bBody}>
                    <a href="#!" className={styles.bTitleLink}>
                      PBC: Ngày 16/10/2025, Thông báo ngày giao dịch đầu tiên
                      đăng ký
                    </a>
                    <div className={styles.bTime}>05/10/2025</div>
                  </div>
                </div>

                <div className={styles.bRow}>
                  <span className={styles.bCode}>NTC</span>
                  <div className={styles.bBody}>
                    <a href="#!" className={styles.bTitleLink}>
                      CC: Điều chỉnh doanh nghiệp do thay đổi ngày giao dịch
                    </a>
                    <div className={styles.bTime}>05/10/2025</div>
                  </div>
                </div>

                <div className={styles.bRow}>
                  <span className={styles.bCode}>SHD</span>
                  <div className={styles.bBody}>
                    <a href="#!" className={styles.bTitleLink}>
                      SHD: Báo cáo tài chính bán niên năm 2025
                    </a>
                    <div className={styles.bTime}>05/10/2025</div>
                  </div>
                </div>
              </div>
            </section>

            {/* TOP 5 CỔ PHIẾU */}
            <section className={styles.widget}>
              <div className={styles.widgetHead}>
                <h3 className={styles.widgetTitle}>TOP 5 CỔ PHIẾU</h3>

                <div className={styles.smallTabs}>
                  <button
                    className={`${styles.smallTab} ${stockTab === "volume" ? styles.activeTab : ""}`}
                    onClick={() => setStockTab("volume")}
                  >
                    KLGD
                  </button>
                  <button
                    className={`${styles.smallTab} ${stockTab === "price" ? styles.activeTab : ""}`}
                    onClick={() => setStockTab("price")}
                  >
                    GIÁ
                  </button>
                  <button
                    className={`${styles.smallTab} ${stockTab === "foreign" ? styles.activeTab : ""}`}
                    onClick={() => setStockTab("foreign")}
                  >
                    NĐT NN
                  </button>
                </div>
              </div>

              <div className={styles.stockTable}>
                <div className={styles.stockHead}>
                  <span className={styles.stockCol1}>Mã CK</span>
                  <span className={styles.stockCol2}>Giá</span>
                  <span className={styles.stockCol3}>KLGD</span>
                </div>

                <div className={styles.stockRow}>
                  <strong className={styles.stockCol1}>VPB</strong>
                  <span className={styles.stockCol2}>
                    28.75 <span className={styles.green}>(+2.85%)</span>
                  </span>
                  <span className={styles.stockCol3}>13,076,400</span>
                </div>

                <div className={styles.stockRow}>
                  <strong className={styles.stockCol1}>SHB</strong>
                  <span className={styles.stockCol2}>
                    16.11 <span className={styles.green}>(+0.19%)</span>
                  </span>
                  <span className={styles.stockCol3}>11,532,900</span>
                </div>

                <div className={`${styles.stockRow} ${styles.stockRowLast}`}>
                  <strong className={styles.stockCol1}>SSI</strong>
                  <span className={styles.stockCol2}>
                    59.10 <span className={styles.red}>(-1.34%)</span>
                  </span>
                  <span className={styles.stockCol3}>4,900,200</span>
                </div>
              </div>
            </section>

            {/* AD BOX */}
            <section className={styles.adBox}>
              <Image src="/ad.png" alt="ad" fill className={styles.cover} />
            </section>

            {/* BÁO CÁO PHÂN TÍCH */}
            <section className={styles.widget}>
              <div className={styles.widgetHead}>
                <h3 className={styles.widgetTitle}>BÁO CÁO PHÂN TÍCH</h3>
              </div>

              <div className={styles.reportList}>
                <div className={styles.bulletin}>
                  <div className={styles.bRow}>
                    <span className={styles.bCode}>POW</span>
                    <div className={styles.bBody}>
                      <a href="#!" className={styles.bTitleLink}>
                        POW: Báo cáo Phân tích kỹ thuật
                      </a>
                      <div className={styles.bTime}>05/10/2025</div>
                    </div>
                  </div>

                  <div className={styles.bRow}>
                    <span className={styles.bCode}>NTC</span>
                    <div className={styles.bBody}>
                      <a href="#!" className={styles.bTitleLink}>
                        CC: Điều chỉnh doanh nghiệp do thay đổi ngày giao dịch
                      </a>
                      <div className={styles.bTime}>05/10/2025</div>
                    </div>
                  </div>

                  <div className={styles.bRow}>
                    <span className={styles.bCode}>CTD</span>
                    <div className={styles.bBody}>
                      <a href="#!" className={styles.bTitleLink}>
                        CTD: Báo cáo cập nhật KQKD Q1/2026
                      </a>
                      <div className={styles.bTime}>05/10/2025</div>
                    </div>
                  </div>

                  <div className={styles.bRow}>
                    <span className={styles.bCode}>PVD</span>
                    <div className={styles.bBody}>
                      <a href="#!" className={styles.bTitleLink}>
                        PVD: Khuyến nghị MUA với giá mục tiêu 32,200 đồng/cổ
                        phiếu
                      </a>
                      <div className={styles.bTime}>05/10/2025</div>
                    </div>
                  </div>

                  <div className={styles.bRow}>
                    <span className={styles.bCode}>SHG</span>
                    <div className={styles.bBody}>
                      <a href="#!" className={styles.bTitleLink}>
                        SHG: Báo cáo tài chính bán niên năm 2025
                      </a>
                      <div className={styles.bTime}>05/10/2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PODCAST */}
            <section className={styles.widget}>
              <div className={styles.widgetHead}>
                <h3 className={styles.widgetTitle}>PODCAST</h3>
              </div>

              <div className={styles.podcastList}>
                <div className={styles.podcastRow}>
                  <div className={styles.podcastThumb}>
                    <Image
                      src="/postcast1.png"
                      alt="pod1"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.podcastBody}>
                    <div className={styles.podcastTitle}>
                      Nâng hạng thị trường - Cuộc chơi của niềm tin hệ thống
                    </div>
                  </div>
                  <button className={styles.podcastBtn} aria-label="Play" />
                </div>

                <div className={styles.podcastRow}>
                  <div className={styles.podcastThumb}>
                    <Image
                      src="/postcast1.png"
                      alt="pod2"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.podcastBody}>
                    <div className={styles.podcastTitle}>
                      Bên lề cuộc đua của nhà đầu tư
                    </div>
                  </div>
                  <button className={styles.podcastBtn} aria-label="Play" />
                </div>

                <div className={styles.podcastRow}>
                  <div className={styles.podcastThumb}>
                    <Image
                      src="/postcast1.png"
                      alt="pod3"
                      fill
                      className={styles.cover}
                    />
                  </div>
                  <div className={styles.podcastBody}>
                    <div className={styles.podcastTitle}>
                      Lựa chọn Panasonic có gì đáng chú ý?
                    </div>
                  </div>
                  <button className={styles.podcastBtn} aria-label="Play" />
                </div>
                <Image
                  src="/pod.png"
                  alt="podcast"
                  width={115}
                  height={115}
                  style={{ right: 0 }}
                />
              </div>
            </section>

            <section className={styles.tallAd}>
              <Image src="/adbox.png" alt="ad" fill className={styles.cover} />
            </section>
          </aside>
        </div>

        {/* ===== ROW 7: ĐẶC SẮC ===== */}
        <div className={`${styles.row7} ${styles.mt60}`}>
          <div className={styles.featureHeader}>
            <h3 className={styles.featureTitle}>ĐẶC SẮC</h3>
            <div className={styles.featureMenu}>
              <button
                className={`${styles.ftab} ${featureTab === "magazine" ? styles.activeTab : ""}`}
                onClick={() => setFeatureTab("magazine")}
              >
                MAGAZINE
              </button>
              <button
                className={`${styles.ftab} ${featureTab === "video" ? styles.activeTab : ""}`}
                onClick={() => setFeatureTab("video")}
              >
                VIDEO
              </button>
              <button
                className={`${styles.ftab} ${featureTab === "infographic" ? styles.activeTab : ""}`}
                onClick={() => setFeatureTab("infographic")}
              >
                INFOGRAPHIC
              </button>
            </div>

            <div className={styles.featureSpacer} />
          </div>

          <div className={styles.featureList}>
            {featureTab === "magazine" && (
              <>
                {/* LEFT big card */}
                <article className={styles.featureBig}>
                  <div className={styles.featureThumbBig}>
                    <Image
                      src="/dacsac.png"
                      alt="feature 1"
                      fill
                      className={styles.cover}
                    />
                    <span className={styles.featureBadge}>MAGAZINE</span>
                  </div>

                  <div className={styles.featureBodyBig}>
                    <div className={styles.featureMeta}>Nhìn lại 2025</div>
                    <h3 className={styles.featureHeadline}>
                      <a href="#!" className={styles.featureHeadlineLink}>
                        Nhìn lại 10 sự kiện kinh tế quốc tế "nóng" nhất năm 2025
                      </a>
                    </h3>
                    <p className={styles.featureDesc}>
                      lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quis corporis sit quam quidem ab nisi quaerat, hic
                      obcaecati nulla et aliquam possimus suscipit labore ullam
                      tenetur sed consequatur
                    </p>
                  </div>
                </article>

                {/* RIGHT list */}
                <div className={styles.featureMiniList}>
                  <article className={styles.featureMini}>
                    <Image
                      src="/minidacsac1.png"
                      alt="mini1"
                      width={260}
                      height={148}
                    />
                    <div className={styles.featureMiniBody}>
                      <div className={styles.featureMeta}>
                        <span className={styles.featureTag}>Tài chính</span>
                        <span className={styles.featureTime}>9h trước</span>
                      </div>

                      <a href="!#" className={styles.featureTitle}>
                        Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định
                        hình lại thị trường
                      </a>

                      <p className={styles.featureDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis corporis sit quam quidem ab nisi quaerat, hic
                        obcaecati nulla et aliquam possimus suscipit labore
                        ullam tenetur sed consequatur deserunt cumque. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, dicta consequatur assumenda autem quis maiores
                        cum tenetur. Expedita quo laudantium laborum porro?
                        Consequatur expedita totam iste rerum placeat quaerat
                        sit!
                      </p>
                    </div>
                  </article>

                  <article className={styles.featureMini}>
                    <Image
                      src="/minidacsac2.png"
                      alt="mini1"
                      width={260}
                      height={148}
                    />
                    <div className={styles.featureMiniBody}>
                      <div className={styles.featureMeta}>
                        <span className={styles.featureTag}>Tài chính</span>
                        <span className={styles.featureTime}>9h trước</span>
                      </div>

                      <a href="!#" className={styles.featureTitle}>
                        Cho vay ngang hàng Việt Nam: Bước ngoặt pháp lý định
                        hình lại thị trường
                      </a>

                      <p className={styles.featureDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nihil totam nobis fugiat quasi excepturi quis eius
                        soluta repudiandae, incidunt ut ipsam labore animi enim.
                        Molestiae repudiandae odio quia incidunt est!
                      </p>
                    </div>
                  </article>
                </div>
              </>
            )}

            {featureTab === "video" && (
              <div className={styles.featureMiniList}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                    width: "100%",
                  }}
                >
                  Video content sẽ được thêm ở đây
                </div>
              </div>
            )}

            {featureTab === "infographic" && (
              <div className={styles.featureMiniList}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                    width: "100%",
                  }}
                >
                  Infographic content sẽ được thêm ở đây
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===== ROW 8: ĐỌC NHIỀU NHẤT ===== */}
        <div className={`${styles.row8} ${styles.mt60}`}>
          <div className={styles.sectionHead}>
            <Image src="/union.png" alt="union" width={12} height={12} />
            <h3 className={styles.sectionTitle}>ĐỌC NHIỀU NHẤT</h3>
          </div>

          <div className={styles.mostList}>
            {/* LEFT ranked list (1-5) */}
            <div className={styles.mostLeft}>
              <article className={styles.rankRow}>
                <div className={styles.rankNo}>1</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/dacsac.png"
                    alt="most"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Nhà đầu tư chứng khoán đừng "vội mừng" khi Fed hạ lãi suất
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>2</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/dacsac.png"
                    alt="most"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Bitcoin giữ vững mốc 116.000 USD khi giới đầu tư cho đồng
                    thái tử Fed
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>3</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/dacsac.png"
                    alt="most"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Cách 160 triệu USD chip Nvidia được tuồn lậu sang Trung Quốc
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>4</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/dacsac.png"
                    alt="most"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Lần đầu trên thế giới: Quai liên kỹ thuật số dó nhà nước
                    phát hành được trả lại
                  </a>
                </div>
              </article>

              <article className={`${styles.rankRow} ${styles.rankRowLast}`}>
                <div className={styles.rankNo}>5</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/dacsac.png"
                    alt="most"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Nhà đầu tư chứng khoán đừng "vội mừng" khi Fed hạ lãi suất
                  </a>
                </div>
              </article>
            </div>

            {/* RIGHT ranked list (6-10) */}
            <div className={styles.mostRight}>
              <article className={styles.rankRow}>
                <div className={styles.rankNo}>6</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/minidacsac1.png"
                    alt="most6"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Hệ lộ đơn vị mà mất dùng sau loạt chiến dịch "bắt sống
                    nguyên thủ" của Mỹ
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>7</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/minidacsac2.png"
                    alt="most7"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Cựu COO Pizza 4P's chỉ ra thế vàng của Việt Nam để thông trị
                    chuỗi cung ứng F&B
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>8</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/minidacsac1.png"
                    alt="most8"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Chỉ số lượng McWages của được tính theo giá bánh mì kep thịt
                  </a>
                </div>
              </article>

              <article className={styles.rankRow}>
                <div className={styles.rankNo}>9</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/minidacsac2.png"
                    alt="most9"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    "Lang giềng" Việt Nam triển khai hệ thống AI siêu tâm độ dạo
                    vào Mỹ
                  </a>
                </div>
              </article>

              <article className={`${styles.rankRow} ${styles.rankRowLast}`}>
                <div className={styles.rankNo}>10</div>
                <div className={styles.rankThumb}>
                  <Image
                    src="/minidacsac1.png"
                    alt="most10"
                    fill
                    className={styles.cover}
                  />
                </div>
                <div className={styles.rankTitle}>
                  <a href="#!" className={styles.rankTitleLink}>
                    Đánh bại "Đức-Nhật, quốc gia có GDP bình quân đầu người thừa
                    xa Việt Nam có...
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>

        <BigbodyContent />
      </div>
    </section>
  );
}
