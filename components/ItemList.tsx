import style9 from "style9";
import Image from "next/image";
import items from "public/data/items.json";

const styles = style9.create({
  itemGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "20px",
    gridColumnGap: "20px",
    // currently style9 doesn't support media queries in TS
    // @ts-ignore
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      gridRowGap: "0",
    },
  },
  description: {
    fontSize: 12,
    // @ts-ignore
    "@media (max-width: 800px)": {
      paddingBottom: 30,
    },
  },
  image: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    lineHeight: 0,
  },
  context: {
    fontStyle: "italic",
  },
});

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
      <a className={styles("image")} href={props.link} target="_blank">
        <Image
          width={600}
          height={267}
          alt={props.title}
          src={`/assets/images/${props.image}`}
          objectFit="cover"
        />
      </a>
      <div className={styles("description")}>
        <h3>
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        </h3>
        <p className={styles("context")}>{props.context}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default function ItemList(): JSX.Element {
  return (
    <div className={styles("itemGrid")}>
      {items.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </div>
  );
}
