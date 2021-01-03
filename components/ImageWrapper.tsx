import styles from "components/ImageWrapper.module.css";

type ImageWrapperProps = {
  children: JSX.Element;
  caption?: JSX.Element;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children, caption } = props;
  return (
    <div className={styles.container}>
      <span className={styles.image}>{children}</span>
      {caption != null && <span className={styles.caption}>{caption}</span>}
    </div>
  );
}
