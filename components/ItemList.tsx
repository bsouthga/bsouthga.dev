import Image from "next/image";
import items from "public/data/items.json";
import ImageWrapper from "components/ImageWrapper";
import styles from "components/ItemList.module.css";
import GithubLink from "components/GithubLink";

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
      <a href={props.link} target="_blank">
        <ImageWrapper>
          <Image
            width={600}
            height={267}
            alt={props.title}
            src={`/assets/images/${props.image}`}
            objectFit="cover"
          />
        </ImageWrapper>
      </a>
      <div className={styles.description}>
        <div className={styles.title}>
          <h3>
            <a href={props.link} target="_blank">
              {props.title}
            </a>
          </h3>
          {props.github != null && <GithubLink href={props.github} />}
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
