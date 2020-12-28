import style9 from "style9";

const styles = style9.create({
  root: {
    display: "block",
    flexGrow: 0,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    lineHeight: 0,
  },
});

type ImageWrapperProps = {
  children: JSX.Element;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children } = props;
  return <span className={styles("root")}>{children}</span>;
}
