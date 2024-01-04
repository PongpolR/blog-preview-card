import Image from "next/image";
import styles from "./page.module.css";
import ilusImg from "../public/illustration-article.svg";
import imgAvatar from "../public/image-avatar.webp";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image priority className={styles.ilus} src={ilusImg} alt="ilusImg" />
          <div className={styles.learning}>
            <span>Learning</span>
          </div>
          <div>Published 21 Dec 2023</div>
          <div>
            <h1 className={styles.h1}>HTML & CSS foundations</h1>
          </div>
          <div className={styles.paragraph}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </div>
          <div className={styles.author}>
            <Image
              priority
              src={imgAvatar}
              className={styles.imgAvatar}
              alt="avatarImg"
            />{" "}
            <span className={styles.authorName}>Greg Hooper</span>
          </div>
        </div>
      </div>
    </>
  );
}
