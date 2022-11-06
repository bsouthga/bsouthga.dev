import Image from "next/image";
import items from "public/data/items.json";
import ImageWrapper from "components/ImageWrapper";
import IconLink from "components/IconLink";
import Link from "next/link";

import styles from "./ItemList.module.css";

type ItemProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  context: string;
  github?: string | undefined;
};

function Item(props: ItemProps): JSX.Element {
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">
        <ImageWrapper>
          <Image
            priority
            width={600}
            height={300}
            alt={props.title}
            src={`/assets/images/${props.image}`}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </ImageWrapper>
      </a>
      <div className={styles.description}>
        <div className={styles.title}>
          <h3 className={styles.titleHeader}>
            <Link href={props.link}>{props.title}</Link>
          </h3>
          {props.github != null && (
            <IconLink icon="github" href={props.github} />
          )}
        </div>
        <p className={styles.context}>{props.context}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default function ItemList(): JSX.Element {
  return (
    <div className={styles.itemGrid}>
      {items.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </div>
  );
}
