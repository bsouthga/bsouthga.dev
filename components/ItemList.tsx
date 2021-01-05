import Image from "next/image";
import items from "public/data/items.json";
import ImageWrapper from "components/ImageWrapper";
import IconLink from "components/IconLink";
import Link from "next/link";
import style9 from "style9";

const styles = style9.create({
  itemGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowGap: "20px",
    gridColumnGap: "20px",
    // @ts-ignore
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      gridRowGap: "0",
    },
  },
  description: {
    // @ts-ignore
    fontSize: "0.75em",
    // @ts-ignore
    "@media (max-width: 800px)": {
      paddingBottom: "30px",
      fontSize: "1em",
    },
  },
  context: {
    fontStyle: "italic",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "10px",
  },
  titleHeader: {
    margin: "0px",
    marginRight: "6px",
  },
});

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
            priority
            width={600}
            height={300}
            alt={props.title}
            src={`/assets/images/${props.image}`}
          />
        </ImageWrapper>
      </a>
      <div className={styles("description")}>
        <div className={styles("title")}>
          <h3 className={styles("titleHeader")}>
            <Link href={props.link}>
              <a>{props.title}</a>
            </Link>
          </h3>
          {props.github != null && (
            <IconLink icon="github" href={props.github} />
          )}
        </div>
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
