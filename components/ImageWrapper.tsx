import styles from "./ImageWrapper.module.css";

type ImageWrapperProps = {
  children: JSX.Element;
  height?: number;
  caption?: string | null;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children, caption, height } = props;
  return (
    <span className={styles.container} style={height == null ? {} : { height }}>
      <span className={styles.imageContainer}>{children}</span>
      <span className={styles.caption}>{caption}</span>
    </span>
  );
}
