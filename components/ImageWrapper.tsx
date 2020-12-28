import styles from "components/ImageWrapper.module.css";

type ImageWrapperProps = {
  children: JSX.Element;
};

export default function ImageWrapper(props: ImageWrapperProps): JSX.Element {
  const { children } = props;
  return <span className={styles.root}>{children}</span>;
}
