import Image from "next/image";
import items from "public/data/items.json";
import ImageWrapper from "components/ImageWrapper";
import styles from "components/ItemList.module.css";

type ItemProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  context: string;
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
        <h3>
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        </h3>
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
