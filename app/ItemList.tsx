import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";
import IconLink from "components/IconLink";
import Link from "next/link";

import styles from "./ItemList.module.css";

export type ItemProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  context: string;
  github?: string | undefined;
  blurDataURL: string;
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
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
            placeholder="blur"
            blurDataURL={props.blurDataURL}
            style={imageStyle}
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

export type Props = Readonly<{
  items: ReadonlyArray<ItemProps>;
}>;

export default function ItemList({ items }: Props): JSX.Element {
  return (
    <div className={styles.itemGrid}>
      {items.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </div>
  );
}
