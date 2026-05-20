"use client";

import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        {/* TOP BAR */}
        <div className={styles["header-top"]}>
          <div className={styles.logo}>VTVIndex</div>

          <div className={styles["top-actions"]}>
            <a>Truyền hình</a>
            <a>Tin mới nhất</a>
            <a>Lịch sự kiện</a>
            <a>Dữ liệu</a>
            <a>Tìm kiếm</a>
            <a>Thông báo</a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            className={styles.menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`${styles["mobile-app"]} ${
            isMenuOpen ? styles["menu-open"] : ""
          }`}
        >
          <a>Truyền hình</a>
          <a>Tin mới nhất</a>
          <a>Lịch sự kiện</a>
          <a>Dữ liệu</a>
          <a>Tìm kiếm</a>
          <a>Thông báo</a>
        </div>

        {/* MENU BAR */}
        <div
          className={`${styles["header-menu"]} ${
            isMenuOpen ? styles["menu-hidden"] : ""
          }`}
        >
          <nav className={styles.nav}>
            <a>Trang chủ</a>
            <a>Mới nhất</a>
            <a>Thời sự</a>
            <a>Thế giới</a>
            <a>Thị trường</a>
            <a>Doanh nghiệp</a>
            <a>Tài chính</a>
            <a>Bất động sản</a>
            <a>Kinh doanh</a>
            <a>Kinh tế</a>
            <a>Công nghệ</a>
            <a>Chuyên đề</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
