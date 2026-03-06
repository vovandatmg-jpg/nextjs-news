import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import NewsGrid from "@/components/news-grid/news-grid";
import Content from "@/components/content/content";
import Footer from "@/components/footer/footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />
      <div className={styles.floatWrap}>
        <div className="container">
          <NewsGrid />
        </div>
      </div>
      <div className={styles.contentWrap}>
        <Content />
      </div>

      <Footer />
    </>
  );
}
