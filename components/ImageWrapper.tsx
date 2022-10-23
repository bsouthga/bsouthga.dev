import { style } from "typestyle";

const imageContainerStyle = style({
  display: "block",
  flexGrow: 1,
  borderWidth: 1,
  lineHeight: 0,
  width: "100%",
  position: "relative",
});

const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const captionStyle = style({
  paddingTop: "10px",
  textAlign: "center",
  width: "80%",
});

type ImageWrapperProps = {
  children: JSX.Element;
  height?: number;
  caption?: string | null;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children, caption, height } = props;
  return (
    <span className={containerStyle} style={height == null ? {} : { height }}>
      <span className={imageContainerStyle}>{children}</span>
      <span className={captionStyle}>{caption}</span>
    </span>
  );
}
