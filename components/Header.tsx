import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";
import Link from "next/Link";
import styles from "components/Header.module.css";

export default function Header(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <h1 className={styles.name}>Ben Southgate</h1>
        <div className={styles.social}>
          <div>@bsouthga -</div>
          <a href="https://github.com/bsouthga" target="_blank">
            <img className={styles.icon} src="assets/ionicons/github.svg" />
          </a>
          <a href="https://twitter.com/bsouthga" target="_blank">
            <img className={styles.icon} src="assets/ionicons/twitter.svg" />
          </a>
          <a href="https://www.linkedin.com/in/bensouthgate/" target="_blank">
            <img className={styles.icon} src="assets/ionicons/linkedin.svg" />
          </a>
          <a
            href="https://stackoverflow.com/users/1718488/ben-southgate"
            target="_blank"
          >
            <img
              className={styles.icon}
              src="assets/ionicons/stack-overflow.svg"
            />
          </a>
          <Link href="/posts">
            <a>
              <img
                className={styles.icon}
                src="assets/ionicons/newspaper.svg"
              />
            </a>
          </Link>
        </div>
      </div>
      <ImageWrapper>
        <Image width={80} height={80} src="/assets/images/face.jpg" />
      </ImageWrapper>
    </div>
  );
}
