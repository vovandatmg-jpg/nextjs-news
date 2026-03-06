"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./news-grid.module.css";
import IndexChart from "./index-chart";

export default function NewsGrid() {
  const [selectedIndex, setSelectedIndex] = useState("VN-Index");
  return (
    <section className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.newsContainer}>
          {/* LEFT */}
          <div className={`${styles.left} ${styles.containerLeft}`}>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Phiên 30/9: Khối ngoại tiếp đà bán ròng...
              </p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>Nền kinh tế tạm bợ</p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Cuộc tái định vị của các chuỗi cà phê
              </p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Phiên 30/9: Khối ngoại tiếp đà bán ròng...
              </p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>Nền kinh tế tạm bợ</p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Cuộc tái định vị của các chuỗi cà phê
              </p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Phiên 30/9: Khối ngoại tiếp đà bán ròng...
              </p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>Nền kinh tế tạm bợ</p>
            </div>
            <div className={styles.newsItem}>
              <span className={styles.time}>17:00</span>
              <p className={styles.newsTitle}>
                Cuộc tái định vị của các chuỗi cà phê
              </p>
            </div>
          </div>

          {/* CENTER */}
          <div className={`${styles.center} ${styles.containerCenter}`}>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>SJC HN</span>
              <p className={styles.colorItem}>154,700</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>USD</span>
              <p className={styles.colorItem}>26,380</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Dầu thô</span>
              <p className={styles.colorItem}>48,04</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>BTC</span>
              <p className={styles.colorItem}>87,291</p>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Lãi suất 6T</span>
              <p className={styles.colorItem}>7.10</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className={`${styles.right} ${styles.containerRight}`}>
            <div className={styles.rightSection}>
              <div className={styles.indexList}>
                <div
                  className={`${styles.indexRow} ${selectedIndex === "VN-Index" ? styles.indexRowActive : ""}`}
                  onClick={() => setSelectedIndex("VN-Index")}
                  style={{ cursor: "pointer" }}
                >
                  <span className={`${styles.indexName} ${styles.sizeName}`}>
                    VN-Index
                  </span>
                  <span className={styles.indexValue}>315.70</span>
                  <span
                    className={`${styles.indexPercent} ${styles.colorItem}`}
                  >
                    +1.45%
                  </span>
                  <span className={styles.indexPrice}>34,823</span>
                </div>
                <div
                  className={`${styles.indexRow} ${selectedIndex === "HNX-Index" ? styles.indexRowActive : ""}`}
                  onClick={() => setSelectedIndex("HNX-Index")}
                  style={{ cursor: "pointer" }}
                >
                  <span className={`${styles.indexName} ${styles.sizeName}`}>
                    HNX-Index
                  </span>
                  <span className={styles.indexValue}>315.70</span>
                  <span
                    className={`${styles.indexPercent} ${styles.colorItem}`}
                  >
                    +1.45%
                  </span>
                  <span className={styles.indexPrice}>34,823</span>
                </div>
                <div
                  className={`${styles.indexRow} ${selectedIndex === "CPCOM-Index1" ? styles.indexRowActive : ""}`}
                  onClick={() => setSelectedIndex("CPCOM-Index1")}
                  style={{ cursor: "pointer" }}
                >
                  <span className={`${styles.indexName} ${styles.sizeName}`}>
                    CPCom-Index1
                  </span>
                  <span className={styles.indexValue}>315.70</span>
                  <span
                    className={`${styles.indexPercent} ${styles.colorItem}`}
                  >
                    +1.45%
                  </span>
                  <span className={styles.indexPrice}>34,823</span>
                </div>

                <div
                  className={`${styles.indexRow} ${selectedIndex === "CPCOM-Index2" ? styles.indexRowActive : ""}`}
                  onClick={() => setSelectedIndex("CPCOM-Index2")}
                  style={{ cursor: "pointer" }}
                >
                  <span className={`${styles.indexName} ${styles.sizeName}`}>
                    CPCom-Index2
                  </span>
                  <span className={styles.indexValue}>315.70</span>
                  <span
                    className={`${styles.indexPercent} ${styles.colorItem}`}
                  >
                    +1.45%
                  </span>
                  <span className={styles.indexPrice}>34,823</span>
                </div>
                <div
                  className={`${styles.indexRow} ${selectedIndex === "VN30" ? styles.indexRowActive : ""}`}
                  onClick={() => setSelectedIndex("VN30")}
                  style={{ cursor: "pointer" }}
                >
                  <span className={`${styles.indexName} ${styles.sizeName}`}>
                    VN30
                  </span>
                  <span className={styles.indexValue}>315.70</span>
                  <span
                    className={`${styles.indexPercent} ${styles.colorItem}`}
                  >
                    +1.45%
                  </span>
                  <span className={styles.indexPrice}>34,823</span>
                </div>
              </div>

              <div className={styles.chartBox}>
                <IndexChart selectedIndex={selectedIndex} />
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className={styles.tickerRow}>
          <div className={styles.tickerList}>
            <div className={styles.tickerItem}>
              <span className={styles.tickerName}>VCB</span>
              <span className={styles.tickerPrice}>57.4</span>
              <span>+1.06%</span>
            </div>

            <div className={styles.tickerItem}>
              <span className={styles.tickerName}>HPG</span>
              <span className={styles.tickerPrice}>26.65</span>
              <span>-0.19%</span>
            </div>

            <div className={styles.tickerItem}>
              <span className={styles.tickerName}>FPT</span>
              <span className={styles.tickerPrice}>96.10</span>
              <span>+1.91%</span>
            </div>

            <div className={styles.tickerItem}>
              <span className={styles.tickerName}>ACB</span>
              <span className={styles.tickerPrice}>24.00</span>
              <span>0.00%</span>
            </div>

            <div className={styles.tickerItem}>
              <span className={styles.tickerName}>VCB</span>
              <span className={styles.tickerPrice}>7.89</span>
              <span>+0.77%</span>
            </div>

            <button className={styles.followBtn}>Theo dõi</button>
          </div>
        </div>
      </div>
    </section>
  );
}
