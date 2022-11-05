import Image from "next/image";
import items from "public/data/items.json";
import ImageWrapper from "components/ImageWrapper";
import IconLink from "components/IconLink";
import Link from "next/link";
import { style } from "typestyle";

const itemGridStyle = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridRowGap: "20px",
  gridColumnGap: "20px",
  $nest: {
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      gridRowGap: "0",
    },
  },
});

const descriptionStyle = style({
  fontSize: "0.75em",
  $nest: {
    "@media (max-width: 800px)": {
      paddingBottom: "30px",
      fontSize: "1em",
    },
  },
});
const contextStyle = style({
  fontStyle: "italic",
});

const titleStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingTop: "10px",
});

const titleHeaderStyle = style({
  margin: "0px",
  marginRight: "6px",
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
      <div className={descriptionStyle}>
        <div className={titleStyle}>
          <h3 className={titleHeaderStyle}>
            <Link href={props.link}>{props.title}</Link>
          </h3>
          {props.github != null && (
            <IconLink icon="github" href={props.github} />
          )}
        </div>
        <p className={contextStyle}>{props.context}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default function ItemList(): JSX.Element {
  return (
    <div className={itemGridStyle}>
      {items.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </div>
  );
}
