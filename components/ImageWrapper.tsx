import style9 from "style9";

const styles = style9.create({
  image: {
    display: "block",
    flexGrow: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "currentColor",
    lineHeight: 0,
  },
  container: {
    display: "flex",
    flexGrow: 0,
    flexDirection: "column",
    alignItems: "center",
  },
  caption: {
    paddingTop: "10px",
    textAlign: "center",
    width: "80%",
  },
});

type ImageWrapperProps = {
  children: JSX.Element;
  caption?: JSX.Element;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children, caption } = props;
  return (
    <div className={styles("container")}>
      <span className={styles("image")}>{children}</span>
      {caption != null && <span className={styles("caption")}>{caption}</span>}
    </div>
  );
}
